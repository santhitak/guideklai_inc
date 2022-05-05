const db = require("../config/db.server");
const express = require("express");
const router = express.Router();

router.put("/manage_account/:member_id", async function (req, res, next) {
  const email = req.body.email;
  try {
    let results = await db.query(
      `UPDATE member SET email = ? 
          where member_id = ${req.body.member_id}`,
      email
    );
    res.send(results);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.get(
  "/manage_account/evidence/:member_id",
  async function (req, res, next) {
    try {
      let results = await db.query(
        `SELECT evidence_id, image, member_id FROM evidence
            where member_id = ${req.params.member_id}`
      );
      res.send(results);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
);

router.post(
  "/manage_account/evidence/:member_id",
  async function (req, res, next) {
    try {
      let results = await db.query(
        `INSERT image, member_id FROM evidence where member_id = ${req.params.member_id}`,
        [req.body.image, req.params.member_id]
      );
      res.send(results);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
);

router.get("/article/recent/:member_id", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM article a 
                join member using(member_id) 
                left join promote using(article_id) 
                left join review using(article_id) 
                left join review_category using(article_id) 
                where member_id = ${req.params.member_id} 
                order by create_time DESC`;

    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/total/:member_id", async function (req, res, next) {
  try {
    let sql = `SELECT COUNT(article_id) AS 'total' FROM article
                where member_id = ${req.params.member_id};`;

    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/comment/total/:member_id", async function (req, res, next) {
  try {
    let sql = `SELECT COUNT(comment_id) AS 'total' FROM comment
                where member_id = ${req.params.member_id};`;

    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

exports.router = router;
