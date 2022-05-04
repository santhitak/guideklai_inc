const db = require("../config/db.server");
const express = require("express");
const router = express.Router();

router.put("/manage_account/:member_id", async function (req, res, next) {
  const email = req.body.email;
  try {
    let results = await db.query(
      `UPDATE member SET email = ? where member_id = ${req.body.member_id}`,
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
        `SELECT evidence_id, image, member_id FROM evidence where member_id = ${req.params.member_id}`
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

exports.router = router;
