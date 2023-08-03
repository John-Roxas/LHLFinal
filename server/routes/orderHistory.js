const express = require("express");
const router = express.Router();
const { getOrderHistory } = require("../db/queries/getOrderHistory");
const db = require("../db/connection");

router.get("/", (req, res) => {
  const customerID = req.body;
  console.log("customerID from req.body server", customerID);
  getOrderHistory(customerID)
    .then((result) => {
      console.log("from OrderHistory route in server", result);
      res.send(result);
    })
    .catch((error) => console.log(error.message));
});

module.exports = router;
