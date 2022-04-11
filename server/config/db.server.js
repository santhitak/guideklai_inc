import mysql from "mysql2";

const db = mysql.createConnection({
  host: "mysql8001.site4now.net",
  user: "a85681_gk",
  password: "guide123",
  database: "db_a85681_gk",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
