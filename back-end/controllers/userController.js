import pool from "../db.js";

export const updateLocation = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { lat, lng } = req.body;

    await pool.query(
      "UPDATE users SET lat = $1, lng = $2 WHERE id = $3",
      [lat, lng, user_id]
    );

    res.json({ message: "Location updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update location" });
  }
};