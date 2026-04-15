import pool from "../db.js";

export const createBooking = async (req, res) => {
  try {
    const { worker_id, date, time } = req.body;

    const user_id = req.user.id; // ✅ from authMiddleware

    const newBooking = await pool.query(
      "INSERT INTO bookings (user_id, worker_id, date, time) VALUES ($1,$2,$3,$4) RETURNING *",
      [user_id, worker_id, date, time]
    );

    res.json(newBooking.rows[0]);

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Booking Failed" });
  }
};