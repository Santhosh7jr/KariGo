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

export const getWorkerBookings = async (req, res) => {
  try {
    const worker_id = req.user.id;

    const result = await pool.query(
      `SELECT b.*, u.name as user_name
       FROM bookings b
       JOIN users u ON b.user_id = u.id
       WHERE b.worker_id = $1
       ORDER BY b.date DESC`,
      [worker_id]
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch worker bookings" });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["accepted", "rejected", "completed"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    await pool.query(
      "UPDATE bookings SET status = $1 WHERE id = $2",
      [status, id]
    );

    res.json({ message: "Status updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update status" });
  }
};

export const confirmByUser = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "UPDATE bookings SET status = $1 WHERE id = $2",
      ["confirmed_by_user", id]
    );

    res.json({ message: "Work confirmed" });
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
};

export const markCompletedByWorker = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "UPDATE bookings SET status = $1, completed_at = NOW() WHERE id = $2",
      ["completed_by_worker", id]
    );

    res.json({ message: "Marked as completed" });
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
};

export const checkAutoRelease = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM bookings
      WHERE status = 'completed_by_worker'
    `);

    const now = new Date();

    for (let booking of result.rows) {
      const completedTime = new Date(booking.completed_at);

      const diffHours =
        (now - completedTime) / (1000 * 60 * 60);

      if (diffHours >= 24) {

        // release payment
        await pool.query(
          "UPDATE bookings SET status = $1 WHERE id = $2",
          ["paid_to_worker", booking.id]
        );
      }
    }

    res.json({ message: "Auto release checked" });

  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
};