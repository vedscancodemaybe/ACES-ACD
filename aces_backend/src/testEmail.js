import dotenv from "dotenv";
dotenv.config();

import { sendTicketEmail } from "../utils/sendTicketEmail.js";

sendTicketEmail({
  to: "YOUR_EMAIL@gmail.com",
  name: "ACES Test",
  ticketId: "ACD26-TEST123",
  qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ACES",
})
  .then(() => console.log("✅ Email sent successfully"))
  .catch((err) => {
    console.error("❌ Email failed");
    console.error(err);
  });
