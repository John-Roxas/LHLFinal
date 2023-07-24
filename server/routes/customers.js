const db = require("../connection");
const express = require("express");
const router = express.Router();
const findCustomerInfo = require("../db/queries/findCustomerInfo");

router.get("/customers/:customerID", (req, res) => {
  const customerID = req.params.customerID;

  findCustomerInfo
    .findCustomerInfo(customerID)
    .then((customer) => {
      res.json({ customer });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
