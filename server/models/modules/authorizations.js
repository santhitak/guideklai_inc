const db = require("../../config/db.server.js");

const getAccount = (result) => {
  db.query("SELECT * FROM MEMBER", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

const postAccount = (data, result) => {
  db.query("INSERT INTO MEMBER SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err);
    } else {
      result(null, results);
    }
  });
};

module.exports = { getAccount, postAccount };
