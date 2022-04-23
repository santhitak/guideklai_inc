const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "guideglai.xyz",
  user: "",
  password: "",
  database: "guideglai_gk",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = db;
