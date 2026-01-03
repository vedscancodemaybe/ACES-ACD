import { transporter } from "../config/mailer.js";

export const sendTicketEmail = async ({ to, name, ticketId, qrCode }) => {
  await transporter.sendMail({
    from: `"ACES Community Day" <${process.env.GMAIL_USER}>`,
    to,
    subject: "Your ACES Community Day 2026 Ticket 🎟️",
    html: `
      <h2>Hi ${name},</h2>
      <p>Your registration for <strong>ACES Community Day 2026</strong> is confirmed.</p>
      <p><strong>Ticket ID:</strong> ${ticketId}</p>
      <p>Please present the QR code below at the venue for check-in:</p>
      <img src="${qrCode}" alt="QR Code" />
      <p>📍 Venue: MIT ADT University</p>
      <p>📅 Date: 29 & 30 January 2026</p>
      <br/>
      <p>— Team ACES</p>
    `,
  });
};
