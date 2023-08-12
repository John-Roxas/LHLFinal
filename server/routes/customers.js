const express = require("express");
const router = express.Router();

const db = require("../db/connection");
const findCustomerInfo = require("../db/queries/findCustomerInfo");

router.get("/:customerID", (req, res) => {
  const customerID = req.params.customerID;
  // console.log(customerID)
  const customerInfoQuery = findCustomerInfo(customerID);

  db.query(customerInfoQuery, [customerID])
    .then((result) => {

      res.send(result.rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
