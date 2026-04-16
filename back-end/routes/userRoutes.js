import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import { updateLocation } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message : "Protected route",
    user : req.user
  });
});

router.get(
  "/admin/test",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {
    res.json({ message: "Admin route working" });
  }
);

router.post(
  "/admin-only",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {
    res.json({message : "Admin access granted"});
  }
);

router.post("/location", authMiddleware, updateLocation);

export default router;
