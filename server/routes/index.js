const db = require("../config/db.server");
const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    let results = await db.query("SELECT * FROM province");
    res.send(results);
  } catch (err) {
    return res.status(400).json(err);
  }
});

exports.router = router;
