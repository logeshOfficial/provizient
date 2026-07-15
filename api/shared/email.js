/**
 * Email service — pure SMTP via Nodemailer.
 *
 * Configuration (environment variables):
 *   SMTP_HOST       — SMTP server hostname           (required in production)
 *   SMTP_PORT       — SMTP server port (default 587)
 *   SMTP_USER       — SMTP auth username              (required in production)
 *   SMTP_PASSWORD   — SMTP auth password              (required in production)
 *   SMTP_FROM_EMAIL — Sender identity                 (default: branded ProVizient address)
 *   SMTP_SECURE     — "true" for port 465 (SSL);
 *                     omit / "false" for port 587 (STARTTLS)
 *
 * Retry logic: up to 2 retries with exponential backoff (1 s → 2 s).
 * Failures are logged immediately before retries complete.
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const nodemailer = require("nodemailer");
const { validateEmailFormat } = require("./sanitize");

const MAX_RETRIES = 2;
const BACKOFF_MS = [1000, 2000]; // delay before retry 1, then retry 2

const DEFAULT_FROM = "ProVizient <noreply@provizient.com>";

/**
 * Build a Nodemailer transporter from environment variables.
 * Throws a clear error if required credentials are missing.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error(
      "[Email] Missing SMTP credentials. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD."
    );
  }

  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true"; // true → SSL (465), false → STARTTLS (587)

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    pool: true,           // reuse SMTP connections
    maxConnections: 3,
    socketTimeout: 30000, // 30 s
    greetingTimeout: 10000,
    connectionTimeout: 10000,
  });
}

/**
 * Sleep for `ms` milliseconds.
 * @param {number} ms
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Send a single email via SMTP with retry logic.
 *
 * @param {{ to: string, subject: string, html: string }} options
 * @returns {Promise<{ success: true }>}
 * @throws {Error} after all retries are exhausted
 */
async function sendEmail({ to, subject, html }) {
  // Validate recipient before attempting send
  if (!validateEmailFormat(to)) {
    throw new Error(`[Email] Invalid recipient address: ${to}`);
  }

  const from = process.env.SMTP_FROM_EMAIL || DEFAULT_FROM;

  // Sanitize the HTML content (user-provided fields should already be
  // sanitized by the caller, but this is a defence-in-depth pass)
  const safeHtml = typeof html === "string" ? html : "";

  const transporter = createTransporter();

  let lastError;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      await transporter.sendMail({
        from,
        to,
        subject,
        html: safeHtml,
      });

      await transporter.close();
      return { success: true };
    } catch (err) {
      lastError = err;

      // Log immediately on first failure (before retries complete)
      if (attempt === 0) {
        console.error(
          JSON.stringify({
            timestamp: new Date().toISOString(),
            level: "error",
            event: "email_failed",
            recipient: to,
            error_type: err.code || "smtp_error",
            error_message: err.message,
            attempt,
          })
        );
      }

      if (attempt < MAX_RETRIES) {
        const wait = BACKOFF_MS[attempt] || 2000;
        console.warn(
          `[Email] Attempt ${attempt + 1} failed for ${to}. Retrying in ${wait}ms…`
        );
        await delay(wait);
      }
    }
  }

  // All retries exhausted
  console.error(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      level: "error",
      event: "email_failed_final",
      recipient: to,
      error_message: lastError?.message,
      retry_count: MAX_RETRIES,
    })
  );

  throw new Error(
    `[Email] Delivery failed after ${MAX_RETRIES + 1} attempts to ${to}: ${lastError?.message}`
  );
}

module.exports = { sendEmail };
