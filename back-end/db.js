import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "KariGo",
  password: 'yhwh',
  port: 5432,
});

export default pool;
