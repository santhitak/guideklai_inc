const multer = require("multer");
const db = require("../config/db.server");
const express = require("express");
const path = require("path");
const { isLoggedIn } = require("../middleware");
const router = express.Router();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg"];
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("incorrect file");
    error.code = "incorrect file type";
    return cb(error, false);
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/verify");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  dest: "./uploads/verify",
  fileFilter,
  storage: storage,
});

const storage_article = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/article");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload_article = multer({
  dest: "./uploads/article",
  fileFilter,
  storage: storage_article,
});

router.post(
  "/member/verify/:member_id",
  upload.single("file"),
  isLoggedIn,
  async function (req, res, next) {
    try {
      console.log(req.file);
      let sql = `UPDATE evidence SET evidence_title = 'Entrepreneur Verification', image = '${req.file.filename}' WHERE member_id = ${req.params.member_id}`;
      await db.query(
        `UPDATE member SET verify_status = 'verify' WHERE member_id = ${req.params.member_id}`
      );
      const [rows, fields] = await db.query(sql);
      return res.json(rows);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

router.post(
  "/create/article/review/:member_id",
  upload_article.array("file", 10),
  isLoggedIn,
  async function (req, res, next) {
    const conn = await db.getConnection();
    await conn.beginTransaction();

    const title = req.body.title;
    const content = req.body.content;
    const type = req.body.type;
    const file = req.files;

    let pathArray = [];

    try {
      const [rows1, fields1] = await conn.query(
        "INSERT INTO `article` (`member_id`, `information`, `type_article`) VALUES (?, ?, ?)",
        [req.params.member_id, content, "review"]
      );
      const [rows2, fields2] = await conn.query(
        "INSERT INTO `review` (`article_id`, `title_review`) VALUES (?, ?)",
        [rows1.insertId, title]
      );
      const category = await conn.query(
        "INSERT INTO `review_category` (`article_id`, `category_id`, category) VALUES (?, ?, ?)",
        [rows1.insertId, 1, type]
      );

      file.forEach((file) => {
        let path = [rows1.insertId, file.filename];
        pathArray.push(path);
      });

      await conn.query("INSERT INTO `images` (article_id, image) VALUES ?;", [
        pathArray,
      ]);

      await conn.commit();
      return res.json(rows1[0]);
    } catch (err) {
      await conn.rollback();
      return res.status(500).json(err);
    } finally {
      await conn.release();
    }
  }
);

router.post(
  "/create/article/promote/:member_id",
  upload_article.array("file", 10),
  isLoggedIn,
  async function (req, res, next) {
    const conn = await db.getConnection();
    await conn.beginTransaction();

    const type = req.body.type;
    const language = req.body.language;
    const province = req.body.province;
    const price = req.body.price;
    const file = req.files;

    let pathArray = [];

    try {
      const [rows1, fields1] = await conn.query(
        "INSERT INTO article (member_id, information, type_article) VALUES (?, ?, ?)",
        [req.params.member_id, req.body.information, "Promote"]
      );
      const [rows2, fields2] = await conn.query(
        "INSERT INTO promote (article_id, title_promote, type_promote) VALUES (?, ?, ?)",
        [rows1.insertId, req.body.title, type]
      );

      file.forEach((file) => {
        let path = [rows1.insertId, file.filename];
        pathArray.push(path);
      });

      await conn.query("INSERT INTO `images` (article_id, image) VALUES ?;", [
        pathArray,
      ]);

      if (type === "Attraction") {
        const attraction = await conn.query(
          "INSERT INTO attraction (article_id, province_id, office_hour, attraction_price) VALUES (?, ?, ?, ?)",
          [rows1.insertId, province, req.body.office_hour, price]
        );
      }
      if (type === "Tour") {
        const tour = await conn.query(
          "INSERT INTO tour (article_id, tour_price) VALUES (?, ?)",
          [rows1.insertId, price]
        );
        const tour_province = await conn.query(
          "INSERT INTO tour_province (article_id, province_id) VALUES (?, ?)",
          [rows1.insertId, province]
        );
        for (let i = 0; i < language.length; i++) {
          const tour_lang = await conn.query(
            "INSERT INTO tour_language_skill (article_id, language_id) VALUES (?, ?)",
            [rows1.insertId, language[i]]
          );
        }
      }

      if (type === "Guide") {
        const guide = await conn.query(
          "INSERT INTO guide (article_id, age, gender, guide_price) VALUES (?, ?, ?, ?, )",
          [rows1.insertId, req.body.age, req.body.gender, price]
        );
        for (let i = 0; i < language.length; i++) {
          const guide_lang = await conn.query(
            "INSERT INTO guide_language_skill (article_id, language_id) VALUES (?, ?)",
            [rows1.insertId, language[i]]
          );
        }
      }

      if (type === "Rest") {
        const guide = await conn.query(
          "INSERT INTO rest (article_id, province_id, lower_price, higher_price) VALUES (?, ?, ?, ?)",
          [rows1.insertId, province, req.body.lowerprice, req.body.higherprice]
        );
      }

      return res.json(rows1[0]);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

exports.router = router;
