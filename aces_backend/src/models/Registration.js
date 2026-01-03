import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    college: String,
    year: String,
    day: String,

    orderId: String,
    paymentId: String,
    amount: Number,

    ticketId: String,
    qrCode: String,

    checkedIn: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Registration", registrationSchema);
