const express = require("express");
const router = express.Router();
const getRestaurants = require("../db/queries/search");

router.get("/", (req, res) => {
  const searchTerm = req.query.term;
  const mode = req.query.mode;
  
  getRestaurants
    .getRestaurants(mode, searchTerm)
    .then((restaurants) => {
      res.json(restaurants);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;