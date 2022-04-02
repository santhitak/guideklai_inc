import mysql from "mysql2"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "webpro",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

export default db
