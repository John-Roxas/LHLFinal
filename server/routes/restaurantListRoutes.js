//Example Organization

const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const { getRestaurantList } = require("../db/queries/restuarantList");

router.get("/", (req, res) => {
  const restaurantQuery = getRestaurantList();
  db.query(restaurantQuery)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
