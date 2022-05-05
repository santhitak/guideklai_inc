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

const storage_review = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/article");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload_review = multer({
  dest: "./uploads/article",
  fileFilter,
  storage: storage_review,
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
  upload_review.array("file", 10),
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

exports.router = router;
