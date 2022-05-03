const db = require("../config/db.server");
const express = require("express");
const router = express.Router();

router.get("/article", async function (req, res, next) {
  try {
    let sql =
      "SELECT * FROM article join member using(member_id) left join promote using(article_id) left join review using(article_id) left join review_category using(article_id)";

    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/filter/:type", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM article left join promote using(article_id) left join review using(article_id) left join review_category using(article_id) where type_Promote = "${req.params.type}" or category = "${req.params.type}"`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/:id", async function (req, res, next) {
  await db.query(
    `update article set view = view + 1 where article_id = ${req.params.id}`
  );
  try {
    let sql = `SELECT * FROM article left join member using(member_id) left join promote using(article_id) left join review using(article_id) where article_id = ${req.params.id}`;
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

router.get("/article/show/all", async function (req, res, next) {
  try {
    let sql = `SELECT  * FROM article left join promote using(article_id) left join review using(article_id) order by view DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/show/review/all", async function (req, res, next) {
  try {
    let sql = `SELECT  * FROM article left join review using(article_id) left join review_category using(article_id) order by view DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/show/review/tour/rating", async function (req, res, next) {
  try {
    let sql = `SELECT  * FROM article left join review using(article_id) left join review_category using(article_id) left join tour using(article_id) where category = 'Tour' AND view >= 100 order by rating_review DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/show/review/rest/view", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM article left join review using(article_id) left join review_category using(article_id) left join rest using(article_id) where category = 'Rest' AND lower_price IS NOT null AND higher_price IS NOT null order by view DESC, rating_review DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/show/promote/rest/view", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM article left join promote using(article_id) left join rest using(article_id) where type_promote = 'Rest' AND lower_price IS NOT null AND higher_price IS NOT null order by view DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get(
  "/article/show/promote/attraction/province/view",
  async function (req, res, next) {
    try {
      let sql = `SELECT province_name, COUNT(article_id) promote FROM article left join attraction using(article_id) left join province using(province_id) where type_article = 'Promote' AND province_name IS NOT null GROUP BY province_id`;
      const [rows, fields] = await db.query(sql);
      return res.json(rows);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

router.get(
  "/article/show/promote/rest/province/view",
  async function (req, res, next) {
    try {
      let sql = `SELECT province_name, COUNT(article_id) promote FROM article left join rest using(article_id) left join province using(province_id) where type_article = 'Promote' AND province_name IS NOT null GROUP BY province_id`;
      const [rows, fields] = await db.query(sql);
      return res.json(rows);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

exports.router = router;
