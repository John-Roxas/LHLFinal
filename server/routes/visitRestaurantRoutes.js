const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const { visitRestaurant } = require("../db/queries/visitRestaurant");

router.get("/:id", (req, res) => {
  const restaurantItemsQuery = visitRestaurant();
  const restaurantId = req.params.id;
  console.log("restaurantId:", req.params);
  db.query(restaurantItemsQuery, [restaurantId]).then((result) => {
    res.send(result.rows);
  });
});

module.exports = router;
