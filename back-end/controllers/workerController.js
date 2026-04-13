import pool from "../db.js";

export const getAllWorkers = async (req, res) => {

  try {
    const workers = await pool.query('SELECT * FROM workers');
    res.json(workers.rows);
  } catch (error) {
    res.status(500).json({message : error.message});
  }

};

export const getWorkerById = async (req, res) => {

  try {
    const {id} = req.params;
    const worker = await pool.query(
      "SELECT * FROM workers WHERE id = $1", 
      [id]
    );

    if (worker.rows.length === 0) {
      return res.status(404).json({message : "worker not found"});
    }

    res.json(worker.rows[0]);
  } catch (error) {
    res.status(500).json({message : error.message});
  }

};

export const createWorker = async (req, res) => {
  try {
    const {user_id, category, experience, location, price} = req.body;

    const newWorker = await pool.query(
      'INSERT INTO workers (user_id, category, experience, location, price) values($1, $2, $3, $4, $5) RETURNING *',
      [user_id, category, experience, location, price]
    );

    res.status(201).json(newWorker.rows[0]);
  } catch(error) {
    res.status(500).json({message : error.message});
  }
};