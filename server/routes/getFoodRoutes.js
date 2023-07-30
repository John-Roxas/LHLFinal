const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const { getFood } = require("../db/queries/getFood");

router.get("/:id/food_items/:foodItemId", (req, res) => {
  const foodItemQuery = getFood();
  const restaurantId = req.params.id;
  const foodId = req.params.foodItemId;
  console.log("##");
  console.log("restaurant ID", restaurantId);
  console.log("food ID", foodId);
  db.query(foodItemQuery, [restaurantId, foodId], (err, result) => {
    res.json(result.rows);
  });
});

module.exports = router;
