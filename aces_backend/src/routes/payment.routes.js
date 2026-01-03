import express from "express";
import {
  createOrder,
  verifyPaymentAndRegister,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/verify-and-register", verifyPaymentAndRegister);

export default router;
