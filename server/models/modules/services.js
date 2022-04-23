const db = require("../../config/db.server.js");

const getProvince = (result) => {
  db.query("SELECT `province.id` FROM PROVINCE", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

module.exports = { getProvince };
