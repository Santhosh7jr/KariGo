import express from "express";
import { getAllWorkers, getWorkerById, createWorker } from "../controllers/workerController.js";
import {authMiddleware} from "../middleware/authMiddleware.js";
import {roleMiddleware} from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get('/', getAllWorkers);
router.get('/:id', getWorkerById);

router.post('/', authMiddleware, roleMiddleware('admin'), createWorker);

export default router;