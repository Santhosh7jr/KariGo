import pool from "../db.js";

export const createBooking = async (req, res) => {
  try {
    const { worker_id, date, time } = req.body;

    const user_id = req.user.id; // ✅ from authMiddleware

    const newBooking = await pool.query(
      "INSERT INTO bookings (user_id, worker_id, date, time) VALUES ($1,$2,$3,$4) RETURNING *",
      [user_id, worker_id, date, time],
    );

    res.json(newBooking.rows[0]);
  } catch (error) {
  console.error("BOOKING ERROR:", error); // 👈 ADD THIS
  res.status(500).json({ error: error.message });
}
};

export const getUserBookings = async (req, res) => {
  try {
    const user_id = req.user.id;

    const result = await pool.query(
      `SELECT b.*, u.name AS worker_name
       FROM bookings b
       JOIN workers w ON b.worker_id = w.id
       JOIN users u ON w.user_id = u.id
       WHERE b.user_id = $1`,
      [user_id]
    );

    res.json(result.rows);

  } catch (error) {
    console.error("BOOKING ERROR:", error); // 🔥 important
    res.status(500).json({ error: error.message });
  }
};
