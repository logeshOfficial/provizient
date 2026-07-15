/**
 * Consultation request API endpoint — Azure Static Web Apps serverless function.
 *
 * POST /api/consultation
 *   Body: { name, email, company, industry, service, phone?, budget?, message?, preferredDate? }
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const { sendEmail } = require("../shared/email");
const { sanitizeInput, validateEmailFormat } = require("../shared/sanitize");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

module.exports = async function (context, req) {
  if (req.method === "OPTIONS") {
    context.res = { status: 204, headers: corsHeaders };
    return;
  }

  if (req.method !== "POST") {
    context.res = {
      status: 405,
      headers: { ...corsHeaders, Allow: "POST, OPTIONS" },
      body: { message: "Method Not Allowed" },
    };
    return;
  }

  try {
    const {
      name,
      email,
      company,
      phone,
      industry,
      service,
      budget,
      message,
      preferredDate,
    } = req.body || {};

    if (!name || !email || !company || !industry || !service) {
      context.res = {
        status: 400,
        headers: corsHeaders,
        body: { message: "Missing required fields" },
      };
      return;
    }

    if (!validateEmailFormat(email)) {
      context.res = {
        status: 400,
        headers: corsHeaders,
        body: { message: "Invalid email address" },
      };
      return;
    }

    const s = sanitizeInput;
    const notificationEmail =
      process.env.NOTIFICATION_EMAIL || "info@provizient.com";

    await Promise.all([
      sendEmail({
        to: notificationEmail,
        subject: `New Consultation Request: ${s(company)}`,
        html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Consultation Request</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a;">
  <h2 style="color:#0066ff;">New Consultation Request</h2>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:8px 0;font-weight:bold;width:140px;">Name</td><td>${s(name)}</td></tr>
    <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td><a href="mailto:${s(email)}">${s(email)}</a></td></tr>
    <tr><td style="padding:8px 0;font-weight:bold;">Company</td><td>${s(company)}</td></tr>
    ${phone ? `<tr><td style="padding:8px 0;font-weight:bold;">Phone</td><td>${s(phone)}</td></tr>` : ""}
    <tr><td style="padding:8px 0;font-weight:bold;">Industry</td><td>${s(industry)}</td></tr>
    <tr><td style="padding:8px 0;font-weight:bold;">Service</td><td>${s(service)}</td></tr>
    ${budget ? `<tr><td style="padding:8px 0;font-weight:bold;">Budget</td><td>${s(budget)}</td></tr>` : ""}
    ${preferredDate ? `<tr><td style="padding:8px 0;font-weight:bold;">Preferred Date</td><td>${s(preferredDate)}</td></tr>` : ""}
  </table>
  ${message ? `<h3 style="margin-top:20px;">Notes</h3><div style="background:#f8fafc;border-left:4px solid #0066ff;padding:16px;border-radius:4px;white-space:pre-wrap;">${s(message)}</div>` : ""}
  <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;"/>
  <p style="font-size:12px;color:#64748b;">Submitted via provizient.com consultation form</p>
</body>
</html>`,
      }),
      sendEmail({
        to: email,
        subject: "Your Consultation Request — ProVizient",
        html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Consultation Request Received</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a;">
  <h2 style="color:#0066ff;">Consultation Request Received</h2>
  <p>Hi ${s(name.split(" ")[0])},</p>
  <p style="line-height:1.6;">Thank you for your interest in ProVizient. Our consulting team will review your request and reach out within <strong>1–2 business days</strong>.</p>
  <p style="margin-top:32px;line-height:1.6;">Best regards,<br/><strong>The ProVizient Team</strong></p>
  <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;"/>
  <p style="font-size:12px;color:#64748b;">ProVizient · AI Consulting &amp; Data Solutions · <a href="https://provizient.com" style="color:#0066ff;">provizient.com</a></p>
</body>
</html>`,
      }),
    ]);

    context.res = {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: { success: true },
    };
  } catch (error) {
    context.log.error("[Consultation API]", error.message);
    context.res = {
      status: 500,
      headers: corsHeaders,
      body: {
        message:
          "Failed to process your consultation request. Please try again or contact us directly.",
      },
    };
  }
};
