const express = require("express");
const router = express.Router();
const getRestaurantById = require("../db/queries/getRestaurantById");

router.get("/:id", (req, res) => {
  const restaurantId = req.params.id;
  
  getRestaurantById
    .getRestaurantById(restaurantId)
    .then((restaurant) => {
      res.json(restaurant);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;