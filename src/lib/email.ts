import { Resend } from "resend";
import { SITE_CONFIG } from "./constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const fromEmail =
  process.env.RESEND_FROM_EMAIL || `ProVizient <noreply@provizient.com>`;
const notificationEmail =
  process.env.NOTIFICATION_EMAIL || SITE_CONFIG.email;

type EmailPayload = {
  subject: string;
  html: string;
};

async function sendEmail(to: string, payload: EmailPayload) {
  if (!resend) {
    console.warn("[Email] Resend not configured. Email would have been sent:", payload.subject);
    return { success: true, mock: true };
  }

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to,
    subject: payload.subject,
    html: payload.html,
  });

  if (error) throw new Error(error.message);
  return { success: true, id: data?.id };
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  return sendEmail(notificationEmail, {
    subject: `New Contact Inquiry: ${data.subject}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });
}

export async function sendContactConfirmation(email: string, name: string) {
  return sendEmail(email, {
    subject: `Thank you for contacting ${SITE_CONFIG.name}`,
    html: `
      <h2>Thank you, ${name}!</h2>
      <p>We've received your message and our team will get back to you within 24 business hours.</p>
      <p>Best regards,<br/>The ${SITE_CONFIG.name} Team</p>
    `,
  });
}

export async function sendConsultationNotification(data: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  industry: string;
  service: string;
  budget?: string;
  message?: string;
  preferredDate?: string;
}) {
  return sendEmail(notificationEmail, {
    subject: `New Consultation Request: ${data.company}`,
    html: `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      <p><strong>Industry:</strong> ${data.industry}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ""}
      ${data.preferredDate ? `<p><strong>Preferred Date:</strong> ${data.preferredDate}</p>` : ""}
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
    `,
  });
}

export async function sendConsultationConfirmation(email: string, name: string) {
  return sendEmail(email, {
    subject: `Your Consultation Request — ${SITE_CONFIG.name}`,
    html: `
      <h2>Consultation Request Received</h2>
      <p>Hi ${name},</p>
      <p>Thank you for your interest in ${SITE_CONFIG.name}. Our consulting team will review your request and reach out within 1-2 business days to schedule your consultation.</p>
      <p>Best regards,<br/>The ${SITE_CONFIG.name} Team</p>
    `,
  });
}
