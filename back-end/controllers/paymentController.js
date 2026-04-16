import Razorpay from "razorpay";
import crypto from "crypto";
import pool from "../db.js";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
export const createOrder = async (req, res) => {
  try {
    const { booking_id, amount } = req.body;

    const options = {
      amount: amount * 100, // ₹ → paise
      currency: "INR",
      receipt: "receipt_" + booking_id,
    };

    const order = await razorpay.orders.create(options);

    await pool.query(
      "INSERT INTO payments (booking_id, amount, status) VALUES ($1, $2, $3)",
      [booking_id, amount, "pending"]
    );

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Order creation failed" });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const secret = process.env.RAZORPAY_KEY_SECRET;

    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({ error: "Invalid payment" });
    }

    // ✅ Payment is valid → update DB
    await pool.query(
      "UPDATE payments SET status = $1, payment_id = $2 WHERE status = $3",
      ["success", razorpay_payment_id, "pending"]
    );

    res.json({ message: "Payment verified successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Verification failed" });
  }
};

export const releasePayment = async (req, res) => {
  try {
    const { booking_id } = req.body;

    const amount = 500; // example

    const workerAmount = amount * 0.9;
    const platformFee = amount * 0.1;

    await pool.query(
      "UPDATE bookings SET status = $1 WHERE id = $2",
      ["paid_to_worker", booking_id]
    );

    res.json({
      message: "Payment released",
      workerAmount,
      platformFee,
    });

  } catch (err) {
    res.status(500).json({ error: "Failed to release payment" });
  }
};