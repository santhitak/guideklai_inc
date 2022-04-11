import mysql from "mysql2"

const db = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    user: "sql6485002",
    password: "BCqsMIKgX4",
    database: "sql6485002",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

export default db
