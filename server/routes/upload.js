const multer = require("multer");
const db = require("../config/db.server");
const express = require("express");
const path = require("path");
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

router.post(
  "/member/verify/:member_id",
  upload.single("file"),
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

exports.router = router;
