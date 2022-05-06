const db = require("../config/db.server");
const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { generateToken } = require("../utils/token");
const { isLoggedIn } = require("../middleware");
// const pool = require("../config");
// const { isLoggedIn } = require("../middlewares");
// const commentOwner = async (req, res, next) => {
//   if (req.user.role === "admin") {
//     return next();
//   }
//   const [[comment]] = await pool.query("SELECT * FROM comments WHERE id=?", [
//     req.params.id,
//   ]);

//   if (comment.comment_by_id !== req.user.id) {
//     return res
//       .status(403)
//       .send("You do not have permission to perform this action");
//   }

//   next();
// };
const router = express.Router();

// router.get("/:blogId/comments", function (req, res, next) {});

router.post(
  "/:article_id/comments/:member_id",
  isLoggedIn,
  async function (req, res, next) {
    const comment = req.body.comment;

    try {
      const [rows1, fields1] = await db.query(
        "INSERT INTO `comment` (`article_id`, `comment`, `member_id` ) VALUES (?, ?, ?)",
        [req.params.article_id, comment, req.params.member_id]
      );
      const [rows2, fields2] = await db.query(
        "SELECT * FROM `comment` WHERE `comment_id` = ?",
        [rows1.insertId]
      );

      return res.json(rows2[0]);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

router.put(
  "/comments/:commentId",
  isLoggedIn,
  // commentOwner,
  async function (req, res, next) {
    try {
      const [rows1, fields1] = await db.query(
        "UPDATE comment SET comment=? ,time=CURRENT_TIMESTAMP WHERE comment_id=?",
        [req.body.comment, req.params.commentId]
      );
      console.log(rows1);
      res.json({ comment: req.body.comment });
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

// Delete comment
router.delete(
  "/comments/:commentId",
  isLoggedIn,
  async function (req, res, next) {
    try {
      const [rows1, fields1] = await db.query(
        "DELETE FROM comment WHERE comment_id=?",
        [req.params.commentId]
      );
      res.json("success");
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

// Add Like comment
// router.put("/comments/addlike/:commentId", async function (req, res, next) {
//   const conn = await pool.getConnection();
//   await conn.beginTransaction();

// note : like is a syntax of sql. must call name of table before like
//   try {
//     const [rows1, fields1] = await conn.query(
//       "SELECT * FROM comments WHERE id=?",
//       [req.params.commentId]
//     );
//     await conn.query(`UPDATE comments SET comments.like = ? WHERE id=?`, [
//       rows1[0].like + 1,
//       req.params.commentId,
//     ]);

//     await conn.commit();

//     res.json({ message: "Like Incress", like: rows1[0].like + 1 });
//   } catch (error) {
//     await conn.rollback();
//     res.status(500).json(error);
//   } finally {
//     console.log("finally");
//     conn.release();
//   }
// });
exports.router = router;
