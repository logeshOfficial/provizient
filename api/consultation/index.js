const { sendEmail } = require("../shared/email");

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

    const notificationEmail =
      process.env.NOTIFICATION_EMAIL || "contact@provizient.com";

    await Promise.all([
      sendEmail({
        to: notificationEmail,
        subject: `New Consultation Request: ${company}`,
        html: `
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Industry:</strong> ${industry}</p>
          <p><strong>Service:</strong> ${service}</p>
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
          ${preferredDate ? `<p><strong>Preferred Date:</strong> ${preferredDate}</p>` : ""}
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
        `,
      }),
      sendEmail({
        to: email,
        subject: "Your Consultation Request — ProVizient",
        html: `
          <h2>Consultation Request Received</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your interest in ProVizient. Our consulting team will review your request and reach out within 1-2 business days.</p>
          <p>Best regards,<br/>The ProVizient Team</p>
        `,
      }),
    ]);

    context.res = {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: { success: true },
    };
  } catch (error) {
    context.log.error("[Consultation API]", error);
    context.res = {
      status: 500,
      headers: corsHeaders,
      body: { message: "Failed to process consultation request" },
    };
  }
};
