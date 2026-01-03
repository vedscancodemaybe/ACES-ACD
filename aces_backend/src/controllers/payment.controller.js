import Razorpay from "razorpay";
import crypto from "crypto";
import QRCode from "qrcode";
import Registration from "../models/Registration.js";
import { sendTicketEmail } from "../utils/sendTicketEmail.js";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const EVENT_PRICES = {
  "acd-2k26": 499,
  "dil-chahta-hai": 0,
};

// ---------------- CREATE ORDER ----------------
export const createOrder = async (req, res) => {
  try {
    const { eventId } = req.body;

    if (!eventId || EVENT_PRICES[eventId] === undefined) {
      return res.status(400).json({ error: "Invalid eventId" });
    }

    const order = await razorpay.orders.create({
      amount: EVENT_PRICES[eventId] * 100,
      currency: "INR",
      receipt: `receipt_${eventId}_${Date.now()}`,
    });

    res.json(order);
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ error: "Order creation failed" });
  }
};

// ---------------- VERIFY & REGISTER ----------------
export const verifyPaymentAndRegister = async (req, res) => {
  try {
    const {
      eventId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userData,
    } = req.body;

    console.log("Verify payload:", {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, error: "Invalid signature" });
    }

    const ticketId = `ACD-${Date.now()}`;
    const qrCode = await QRCode.toDataURL(ticketId);

    const registration = await Registration.create({
      eventId,
      ...userData,
      paymentId: razorpay_payment_id,
      ticketId,
    });

    await sendTicketEmail({
      to: userData.email,
      name: userData.name,
      ticketId,
      qrCode,
    });

    res.json({ success: true, registrationId: registration._id });
  } catch (err) {
    console.error("Verification error:", err);
    res.status(500).json({ success: false, error: "Verification failed" });
  }
};
