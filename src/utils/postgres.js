const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgres://akstitia:YY_u1_9wczJKSQDMT04EhLJErNobmFN3@arjuna.db.elephantsql.com/akstitia",
});

// connectionString: "postgres://postgres:@sherzod123@localhost:5432/examen",
const fetchData = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params);
    return rows;
  } finally {
    client.release();
  }
};

module.exports = {
  fetchData,
};
