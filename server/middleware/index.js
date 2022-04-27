const db = require("../config/db.server");

async function logger(req, res, next) {
  const timestamp = new Date().toISOString().substring(0, 19);
  console.log(`${timestamp} | ${req.method}: ${req.originalUrl}`);
  next();
}

async function isLoggedIn(req, res, next) {
  let authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).send("You are not logged in");
  }

  let [part1, part2] = authorization.split(" ");
  if (part1 !== "Bearer" || !part2) {
    return res.status(401).send("You are not logged in");
  }

  // Check token
  const [tokens] = await db.query("SELECT * FROM tokens WHERE token = ?", [
    part2,
  ]);
  const token = tokens[0];
  if (!token) {
    return res.status(401).send("You are not logged in");
  }

  const [users] = await db.query(
    "SELECT member_id, firstname, lastname, username, password, email, phone_number, type_member, profile_pic FROM member WHERE member_id = ?",
    [token.member_id]
  );
  req.user = users[0];

  next();
}

module.exports = {
  logger,
  isLoggedIn,
};
