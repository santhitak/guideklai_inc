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

exports.router = router;
