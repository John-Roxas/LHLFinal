// routes/cart.js
const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// API endpoint to find items from the latest cart for a specific customer
router.get("/", async (req, res) => {
  const customerId = 1; // Replace with the actual customer ID (you can pass it as a parameter or fetch it from the logged-in state)

  try {
    // Find the latest cart_id for the specific customer
    const cartQuery = `
      SELECT MAX(id) AS latest_cart_id FROM carts WHERE customers_id = $1;
    `;

    const cartResult = await db.query(cartQuery, [customerId]);

    let cartId;
    if (cartResult.rows.length === 0 || cartResult.rows[0].latest_cart_id === null) {
      // If there are no carts for the customer, set cartId to 1
      cartId = 1;
    } else {
      cartId = cartResult.rows[0].latest_cart_id;
    }

    // Fetch cart items for the specified customer and cart_id from the database
    const selectQuery = `
    SELECT
      cart_items.id AS cart_item_id,
      cart_items.food_item_id,
      cart_items.quantity AS food_items_quantity,
      food_items.food_name,
      food_items.price AS food_items_price
    FROM
      cart_items
    INNER JOIN
      food_items
    ON
      cart_items.food_item_id = food_items.id
    WHERE
      cart_items.cart_id = $1;
    `;

    const cartItems = await db.query(selectQuery, [cartId]);

    res.json(cartItems.rows);
  } catch (error) {
    console.error("Error fetching cart data:", error);
    res.status(500).json({ error: "An error occurred while fetching cart data." });
  }
});

module.exports = router;
