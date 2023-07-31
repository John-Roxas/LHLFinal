// routes/cart.js
const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// API endpoint to add items to the cart
router.post("/", async (req, res) => {
  const { foodName, price, quantity } = req.body;

  // Perform any validation checks you need before adding to the cart
  if (!foodName || !price || !quantity) {
    return res.status(400).json({ error: "Invalid data. Food name, price, and quantity are required." });
  }

  try {
    // Create a new cart item object
    const cartItem = {
      foodName,
      price,
      quantity,
    };

    // Insert the cart item into the carts table in the database
    const insertQuery = `
      INSERT INTO carts (cart_position, customers_id, food_items_id, food_items_quantity, food_name, food_items_price)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    // Replace the values array with the actual values from your data
    const values = [cartItem.quantity, 1 /* Replace with the customers_id from your data */, 1 /* Replace with the food_items_id from your data */, cartItem.quantity, cartItem.foodName, cartItem.price];
    const result = await db.query(insertQuery, values);

    res.json({ message: "Item added to cart successfully!", cartItem: result.rows[0] });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "An error occurred while adding to cart." });
  }
});

module.exports = router;
