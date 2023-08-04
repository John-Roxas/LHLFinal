const express = require("express");
const router = express.Router();
const { getOrderHistory } = require("../db/queries/getOrderHistory");
const db = require("../db/connection");

router.post("/", (req, res) => {
  const ID = req.body.cID;
  console.log("customerID from req.body server", ID);
  getOrderHistory(ID)
    .then((result) => {
      console.log("from OrderHistory route in server", result);
      res.send(result);
    })
    .catch((error) => console.log(error.message));
});

module.exports = router;
