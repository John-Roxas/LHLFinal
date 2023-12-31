// routes/cart.js
const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// API endpoint to add items to the cart
router.post("/", async (req, res) => {
  const { foodName, price, quantity, customerInfo } = req.body;

  // Perform any validation checks you need before adding to the cart
  if (!foodName || !price || !quantity || !customerInfo) {
    return res.status(400).json({ error: "Invalid data. Food name, price, quantity, and customer ID are required." });
  }

  try {
    // Find the food_items_id for the specified foodName
    const foodItemQuery = `
      SELECT id AS food_items_id FROM food_items WHERE food_name = $1;
    `;

    const foodItemResult = await db.query(foodItemQuery, [foodName]);

    if (foodItemResult.rows.length === 0) {
      return res.status(400).json({ error: "Invalid food item." });
    }

    const foodItemId = foodItemResult.rows[0].food_items_id;

    // Check if there's an open cart for the specific customer in the carts table
    const openCartQuery = `
      SELECT MAX(id) AS max_cart_id FROM carts WHERE customers_id = $1 AND closed = FALSE;
    `;

    const openCartResult = await db.query(openCartQuery, [customerInfo]);

    let cartId;
    if (openCartResult.rows.length === 0 || openCartResult.rows[0].max_cart_id === null) {
      // If no open cart exists for the customer, create a new cart
      const newCartQuery = `
        INSERT INTO carts (customers_id, closed)
        VALUES ($1, FALSE)
        RETURNING id;
      `;

      const newCartResult = await db.query(newCartQuery, [customerInfo]);
      cartId = newCartResult.rows[0].id;
    } else {
      cartId = openCartResult.rows[0].max_cart_id;
    }

    // Check if the same item already exists in the cart
    const existingCartItemQuery = `
      SELECT id, quantity FROM cart_items WHERE cart_id = $1 AND food_item_id = $2;
    `;

    const existingCartItemResult = await db.query(existingCartItemQuery, [cartId, foodItemId]);

    if (existingCartItemResult.rows.length > 0) {
      // Update the existing cart item's quantity
      const existingItemId = existingCartItemResult.rows[0].id;
      const newQuantity = existingCartItemResult.rows[0].quantity + quantity;

      const updateCartItemQuery = `
        UPDATE cart_items SET quantity = $1 WHERE id = $2;
      `;

      await db.query(updateCartItemQuery, [newQuantity, existingItemId]);
    } else {
      // Insert the cart item as a new item
      const insertQuery = `
        INSERT INTO cart_items (cart_id, food_item_id, quantity, food_name, food_item_price)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;

      const values = [cartId, foodItemId, quantity, foodName, price];
      await db.query(insertQuery, values);
    }

    res.json({ message: "Item added to cart successfully!" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "An error occurred while adding to cart." });
  }
});

module.exports = router;
