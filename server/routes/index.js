const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    res.send({
      message: "Hello",
      activity: "listening at port 4000",
      status: "running",
    });
  } catch (err) {
    return res.status(400).json(err);
  }
});

exports.router = router;
