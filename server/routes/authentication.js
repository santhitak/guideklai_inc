const db = require("../config/db.server");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/auth/register", async (req, res) => {
  const conn = await db.getConnection();
  await conn.beginTransaction();

  const username = req.body.username;
  const password = await bcrypt.hash(req.body.password, 5);
  const firstname = req.body.first_name;
  const lastname = req.body.last_name;
  const email = req.body.email;
  const phoneNum = req.body.phone_number;
  const roleType = req.body.type_member;

  try {
    await conn.query(
      "INSERT INTO MEMBER(firstname, lastname, password, email, phone_number, type_member) VALUES (?, ?, ?, ?, ?, ?)",
      [username, password, firstname, lastname, email, phoneNum, roleType]
    );

    await conn.commit();
    res.status(201).send();
  } catch (err) {
    return res.status(400).json(err);
  } finally {
    conn.release();
  }
});

exports.router = router;
