const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const { getFood } = require("../db/queries/getFood");

router.get("/:id/food_items/:foodItemId", (req, res) => {
  const restaurantId = req.params.id;
  const foodId = req.params.foodItemId;
  console.log("restaurant ID", restaurantId);
  console.log("food ID", foodId);
  db.query(getFood, [restaurantId, foodId], (err, result) => {
    res.send(result.rows);
  });
});

module.exports = router;
