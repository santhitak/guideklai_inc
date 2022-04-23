/*
const express = require("express");
const {
  province,
  createAccount,
  memberData,
} = require("../controllers/index.js");

const router = express.Router();

router.get("/", province);
router.get("/auth/login", memberData);
router.get("/auth/register", createAccount);
router.post("/auth/register", createAccount);
router.get("/auth/get/register", memberData);

exports.router = router;*/

const express = require("express");
const db = require("../config/db.server");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const search = req.query.search || "";
    let sql = "SELECT * from PROVINCE;";
    let cond = [];

    if (search.length > 0) {
      sql =
        "SELECT a.*, b.file_path FROM blogs AS a LEFT JOIN (SELECT * FROM images WHERE main=1) AS b ON a.id = b.blog_id WHERE a.title LIKE ? OR a.content LIKE ?;";
      cond = [`%${search}%`, `%${search}%`];
    }
    const [rows, fields] = await db.query(sql, cond);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

exports.router = router;
