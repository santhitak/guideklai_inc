const { getProvince } = require("../models/modules/services.js");
const {
  postAccount,
  getAccount,
} = require("../models/modules/authorizations.js");

const province = (req, res) => {
  getProvince((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

const memberData = (req, res) => {
  getAccount((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

const createAccount = (req, res) => {
  const data = req.body;
  postAccount(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  province,
  memberData,
  createAccount,
};
