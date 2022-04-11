import db from "../config/db.server.js";

export const getProvince = (result) => {
  db.query("SELECT * FROM PROVINCE", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getAccount = (result) => {
  db.query("SELECT * FROM MEMBER", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const postAccount = (data, result) => {
  db.query("INSERT INTO MEMBER SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
