import express from "express";
import { getUserBookings } from "../controllers/bookingController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createBooking } from "../controllers/bookingController.js";

const router = express.Router();

// ✅ Protected route
router.post("/", authMiddleware, createBooking);
router.get("/user", authMiddleware, getUserBookings);

export default router;