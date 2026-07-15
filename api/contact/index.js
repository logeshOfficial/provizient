/**
 * Contact form API endpoint — Azure Static Web Apps serverless function.
 *
 * POST /api/contact
 *   Body: { name, email, company?, phone?, subject, message }
 *
 * Returns:
 *   200 { success: true }            — both emails delivered
 *   400 { message }                  — missing required fields
 *   405 { message }                  — wrong HTTP method
 *   429 { message }                  — rate limit exceeded
 *   500 { message }                  — email delivery failure
 *   OPTIONS → 204                    — CORS preflight
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const { sendEmail } = require("../shared/email");
const { sanitizeInput, validateEmailFormat } = require("../shared/sanitize");
const { isRateLimited } = require("../shared/rateLimiter");
const { logSubmission, logSuccess, logError, logRateLimit } = require("../shared/logger");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

/**
 * Extract the source IP from the request.
 * Azure passes the real IP via X-Forwarded-For.
 * @param {object} req
 * @returns {string}
 */
function getSourceIp(req) {
  const forwarded = req.headers?.["x-forwarded-for"];
  if (forwarded) {
    // X-Forwarded-For can be a comma-separated list — take the first
    return forwarded.split(",")[0].trim();
  }
  return req.headers?.["x-azure-clientip"] || req.rawBody?.remoteAddr || "unknown";
}

/**
 * Build the HTML body for the notification email sent to info@provizient.com.
 * All user-provided content is sanitized.
 */
function buildNotificationHtml({ name, email, company, phone, subject, message }) {
  const s = sanitizeInput;
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Contact Inquiry</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a;">
  <h2 style="color:#0066ff;margin-bottom:16px;">New Contact Inquiry</h2>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:8px 0;font-weight:bold;width:120px;">Name</td><td style="padding:8px 0;">${s(name)}</td></tr>
    <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td style="padding:8px 0;"><a href="mailto:${s(email)}">${s(email)}</a></td></tr>
    ${company ? `<tr><td style="padding:8px 0;font-weight:bold;">Company</td><td style="padding:8px 0;">${s(company)}</td></tr>` : ""}
    ${phone ? `<tr><td style="padding:8px 0;font-weight:bold;">Phone</td><td style="padding:8px 0;">${s(phone)}</td></tr>` : ""}
    <tr><td style="padding:8px 0;font-weight:bold;">Subject</td><td style="padding:8px 0;">${s(subject)}</td></tr>
  </table>
  <h3 style="margin-top:20px;margin-bottom:8px;">Message</h3>
  <div style="background:#f8fafc;border-left:4px solid #0066ff;padding:16px;border-radius:4px;white-space:pre-wrap;">${s(message)}</div>
  <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;" />
  <p style="font-size:12px;color:#64748b;">Submitted via provizient.com contact form</p>
</body>
</html>`;
}

/**
 * Build the HTML body for the confirmation email sent to the user.
 * Per requirements: includes first name only, NO message body, NO company/phone.
 */
function buildConfirmationHtml({ name }) {
  const firstName = sanitizeInput(name.split(" ")[0]);
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Thank you for contacting ProVizient</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a;">
  <h2 style="color:#0066ff;margin-bottom:16px;">Thanks for reaching out, ${firstName}!</h2>
  <p style="line-height:1.6;">We've received your message and appreciate you taking the time to contact us.</p>
  <p style="line-height:1.6;">Our team will get back to you within <strong>24 business hours</strong>.</p>
  <p style="margin-top:32px;line-height:1.6;">Best regards,<br/><strong>The ProVizient Team</strong></p>
  <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;" />
  <p style="font-size:12px;color:#64748b;">
    ProVizient · AI Consulting &amp; Data Solutions ·
    <a href="https://provizient.com" style="color:#0066ff;">provizient.com</a>
  </p>
</body>
</html>`;
}

module.exports = async function (context, req) {
  const startTime = Date.now();

  // ── CORS preflight ────────────────────────────────────────────────────────
  if (req.method === "OPTIONS") {
    context.res = { status: 204, headers: corsHeaders };
    return;
  }

  // ── Method guard ──────────────────────────────────────────────────────────
  if (req.method !== "POST") {
    context.res = {
      status: 405,
      headers: { ...corsHeaders, Allow: "POST, OPTIONS" },
      body: { message: "Method Not Allowed" },
    };
    return;
  }

  const sourceIp = getSourceIp(req);
  const { name, email, company, phone, subject, message } = req.body || {};

  logSubmission({ user_email: email, source_ip: sourceIp });

  // ── Required field validation ─────────────────────────────────────────────
  if (!name || !email || !subject || !message) {
    context.res = {
      status: 400,
      headers: corsHeaders,
      body: { message: "Missing required fields" },
    };
    return;
  }

  // ── Email format + injection check ───────────────────────────────────────
  if (!validateEmailFormat(email)) {
    context.res = {
      status: 400,
      headers: corsHeaders,
      body: { message: "Invalid email address" },
    };
    return;
  }

  // ── Rate limiting ─────────────────────────────────────────────────────────
  if (isRateLimited(sourceIp)) {
    logRateLimit({ source_ip: sourceIp, user_email: email });
    context.res = {
      status: 429,
      headers: corsHeaders,
      body: { message: "Too many requests. Please try again in a few minutes." },
    };
    return;
  }

  // ── Send both emails ──────────────────────────────────────────────────────
  const notificationTo =
    process.env.NOTIFICATION_EMAIL || "info@provizient.com";

  let notificationSent = false;
  let confirmationSent = false;

  try {
    // Send notification first — this is the critical one
    await sendEmail({
      to: notificationTo,
      subject: `New Contact Inquiry: ${subject}`,
      html: buildNotificationHtml({ name, email, company, phone, subject, message }),
    });
    notificationSent = true;

    // Send confirmation to user — failure here counts as overall failure
    await sendEmail({
      to: email,
      subject: "Thank you for contacting ProVizient",
      html: buildConfirmationHtml({ name }),
    });
    confirmationSent = true;

    const responseTime = Date.now() - startTime;
    logSuccess({
      user_email: email,
      source_ip: sourceIp,
      notification_sent: true,
      confirmation_sent: true,
      response_time_ms: responseTime,
    });

    context.res = {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: { success: true },
    };
  } catch (error) {
    const responseTime = Date.now() - startTime;
    logError({
      user_email: email,
      source_ip: sourceIp,
      notification_sent: notificationSent,
      confirmation_sent: confirmationSent,
      error_reason: error.message,
      response_time_ms: responseTime,
    });

    context.log.error("[Contact API]", error.message);

    context.res = {
      status: 500,
      headers: corsHeaders,
      body: {
        message:
          "Failed to send your message. Please try again or contact us directly at info@provizient.com.",
      },
    };
  }
};
