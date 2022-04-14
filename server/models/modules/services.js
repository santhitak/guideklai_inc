import db from "../../config/db.server.js";

export const getProvince = (result) => {
  db.query("SELECT * FROM province", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
