const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "guideglai.xyz",
  user: "guideglai_big",
  password: "bigterkaem",
  database: "guideglai_gk",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = db;
