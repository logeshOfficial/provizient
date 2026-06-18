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
    const { name, email, company, phone, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      context.res = {
        status: 400,
        headers: corsHeaders,
        body: { message: "Missing required fields" },
      };
      return;
    }

    const notificationEmail =
      process.env.NOTIFICATION_EMAIL || "info@ProVizient.com";

    await Promise.all([
      sendEmail({
        to: notificationEmail,
        subject: `New Contact Inquiry: ${subject}`,
        html: `
          <h2>New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
      sendEmail({
        to: email,
        subject: "Thank you for contacting ProVizient",
        html: `
          <h2>Thank you, ${name}!</h2>
          <p>We've received your message and our team will get back to you within 24 business hours.</p>
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
    context.log.error("[Contact API]", error);
    context.res = {
      status: 500,
      headers: corsHeaders,
      body: { message: "Failed to process contact form" },
    };
  }
};
