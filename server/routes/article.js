const db = require("../config/db.server");
const express = require("express");
const router = express.Router();

router.get("/article", async function (req, res, next) {
  try {
    let sql =
      "SELECT * FROM article left join promote using(article_id) left join review using(article_id)";

    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/:id", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM article left join promote using(article_id) left join review using(article_id) where article_id = ${req.params.id}`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/comment/:id", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM comment left join member using(member_id) where article_id = ${req.params.id} `;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/show/topFiveViewAll", async function (req, res, next) {
  try {
    let sql = `SELECT  * FROM article left join promote using(article_id) left join review using(article_id) order by view DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get(
  "/article/show/topFiveViewAllReview",
  async function (req, res, next) {
    try {
      let sql = `SELECT  * FROM article left join review using(article_id) left join review_category using(article_id) order by view DESC`;
      const [rows, fields] = await db.query(sql);
      return res.json(rows);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

exports.router = router;
