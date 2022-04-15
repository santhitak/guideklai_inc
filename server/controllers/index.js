import { getProvince } from "../models/modules/services.js";
import { postAccount, getAccount } from "../models/modules/authorizations.js";

export const province = (req, res) => {
  getProvince((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const memberData = (req, res) => {
  
  getAccount((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const createAccount = (req, res) => {
  const data = req.body;
  postAccount(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
