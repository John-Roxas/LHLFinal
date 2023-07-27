const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const { getRestaurantList } = require("../db/queries/restaurantList");

router.get("/", (req, res) => {
  const restaurantQuery = getRestaurantList();
  db.query(restaurantQuery).then((result) => {
    res.send(result.rows);
  });
});

module.exports = router;
