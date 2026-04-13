import express from "express";
import { applyForWorker, getApplications, approveApplication, rejectApplication } from "../controllers/workerApplicationController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post('/apply', authMiddleware, applyForWorker);

router.get('/', authMiddleware, roleMiddleware('admin'), getApplications);
router.patch('/approved/:id', authMiddleware, roleMiddleware('admin'), approveApplication);
router.patch('/reject/:id', authMiddleware, roleMiddleware('admin'), rejectApplication);

export default router;