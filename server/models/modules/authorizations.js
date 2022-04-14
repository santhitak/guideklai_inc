import db from "../../config/db.server.js";

export const getAccount = (result) => {
  db.query("SELECT * FROM member", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const postAccount = (data, result) => {
  db.query("INSERT INTO member SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
