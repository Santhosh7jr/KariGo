import express from "express";
import { getUserBookings } from "../controllers/bookingController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createBooking, getWorkerBookings, updateBookingStatus, markCompletedByWorker, confirmByUser, checkAutoRelease } from "../controllers/bookingController.js";

const router = express.Router();

// ✅ Protected route
router.post("/", authMiddleware, createBooking);
router.get("/user", authMiddleware, getUserBookings);
router.get("/worker", authMiddleware, getWorkerBookings);
router.patch("/:id/complete", authMiddleware, markCompletedByWorker);
router.get("/auto-release", checkAutoRelease);
router.patch("/:id/confirm", authMiddleware, confirmByUser);
router.patch("/:id/status", authMiddleware, updateBookingStatus);

export default router;