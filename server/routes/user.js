const db = require("../config/db.server");
const express = require("express");
const router = express.Router();

router.get("/manage_account/:username", async function (req, res) {
  try {
    let results = await db.query(
      "SELECT * FROM member where member_id = ${req.params.id}"
    );
    res.send(results);
  } catch (err) {
    return res.status(400).json(err);
  }
});

exports.router = router;
