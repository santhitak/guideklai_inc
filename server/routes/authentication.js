const db = require("../config/db.server");
const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { generateToken } = require("../utils/token");
const { isLoggedIn } = require("../middleware");
const router = express.Router();

const passwordValidator = (value, helpers) => {
  if (value.length < 8) {
    throw new Joi.ValidationError(
      "Password must contain at least 8 characters"
    );
  }
  if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
    throw new Joi.ValidationError("Password must be harder");
  }
  return value;
};

const usernameValidator = async (value, helpers) => {
  const [rows, _] = await db.query(
    "SELECT username FROM member WHERE username = ?",
    [value]
  );
  if (rows.length > 0) {
    const message = "This username is already taken";
    throw new Joi.ValidationError(message, { message });
  }
  return value;
};

const signupSchema = Joi.object({
  firstname: Joi.string().required().max(150),
  lastname: Joi.string().required().max(150),
  username: Joi.string().required().custom(usernameValidator),
  email: Joi.string().required().email(),
  password: Joi.string().required().custom(passwordValidator),
  phone_number: Joi.string()
    .required()
    .pattern(/0[0-9]{9}/),
  type_member: Joi.string().required(),
  confirm_password: Joi.string().required().valid(Joi.ref("password")),
});

router.post("/auth/register", async (req, res) => {
  try {
    await signupSchema.validateAsync(req.body, { abortEarly: false });
  } catch (err) {
    return res.status(400).send(err);
  }

  const conn = await db.getConnection();
  await conn.beginTransaction();

  const firstname = req.body.first_name;
  const lastname = req.body.last_name;
  const email = req.body.email;
  const username = req.body.username;
  const password = await bcrypt.hash(req.body.password, 5);
  const phone_number = req.body.phone_number;
  const type_member = req.body.type_member;

  try {
    await conn.query(
      "INSERT INTO member(firstname, lastname, username, password, email, phone_number, type_member) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        firstname,
        lastname,
        username,
        password,
        email,
        phone_number,
        type_member,
      ]
    );

    await conn.commit();
    res.status(201).send();
  } catch (err) {
    return res.status(400).json(err);
  } finally {
    conn.release();
  }
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

router.post("/auth/login", async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body, { abortEarly: false });
  } catch (err) {
    return res.status(400).send(err);
  }
  const username = req.body.username;
  const password = req.body.password;

  const conn = await db.getConnection();
  await conn.beginTransaction();

  try {
    const [users] = await conn.query("SELECT * FROM member WHERE username=?", [
      username,
    ]);
    const user = users[0];
    if (!user) {
      throw new Error("Incorrect username or password");
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error("Incorrect username or password");
    }

    const [tokens] = await conn.query(
      "SELECT * FROM tokens WHERE member_id = ?",
      [user.member_id]
    );
    let token = tokens[0]?.token;
    if (!token) {
      token = generateToken();
      await conn.query("INSERT INTO tokens(member_id, token) VALUES (?, ?)", [
        user.member_id,
        token,
      ]);
    }

    await conn.commit();
    res.status(200).json({ token: token });
  } catch (error) {
    await conn.rollback();
    res.status(400).json(error.toString());
  } finally {
    conn.release();
  }
});

router.get("/auth/member", isLoggedIn, async (req, res, next) => {
  res.json(req.user);
});

exports.router = router;
