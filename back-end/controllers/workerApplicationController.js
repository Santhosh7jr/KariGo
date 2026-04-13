import pool from "../db.js";

export const applyForWorker = async (req, res) => {

  try {
    const userId = req.user.id;
    const {category, experience, location} = req.body;

    const application = await pool.query(
      'INSERT INTO worker_applications (user_id, category, experience, location) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, category, experience, location]
    );

    res.status(201).json(application.rows[0]);
  } catch (error) {
    res.status(500).json({message : error.message});
  }

};

export const getApplications = async (req, res) => {
  try {
    const apps = await pool.query("SELECT * FROM worker_applications");
    res.json(apps.rows);
  } catch(error) {
    res.status(500).json({message : error.message});
  }
};

export const approveApplication = async (req, res) => {
  try {
    const {id} = req.params;

    const app = await pool.query(
      "SELECT * FROM worker_applications WHERE id = $1",
      [id]
    );

    if (app.rows.length === 0) {
      return res.status(404).json({message : "Application not found"});
    }

    const application = app.rows[0];

    await pool.query(
      "INSERT INTO workers (user_id, category, experience, location, price) VALUES ($1, $2, $3, $4, $5)",
      [application.user_id, application.category, application.experience, application.location, 500]
    );

    await pool.query(
      "UPDATE worker_applications SET status = 'approved' WHERE id = $1",
      [id]
    );

    res.json({message : "Application approved"});
  } catch (error) {
    res.status(500).json({message : error.message});
  }
};

export const rejectApplication = async (req, res) => {
  try {
    const {id} = req.params;

    await pool.query(
      "UPDATE worker_applications SET status = 'rejected' WHERE id = $1",
      [id]
    );

    res.json({message : "Application rejected"});
  } catch (error) {
    res.status(500).json({message : error.message});
  }
};