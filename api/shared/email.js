async function sendEmail({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[Email] RESEND_API_KEY not set — skipping send:", subject);
    return { success: true, mock: true };
  }

  const from =
    process.env.RESEND_FROM_EMAIL || "ProVizient <noreply@provizient.com>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Failed to send email");
  }

  return { success: true };
}

module.exports = { sendEmail };
