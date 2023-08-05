// routes/cart.js
const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// API endpoint to find items from the latest cart for a specific customer
router.get("/:customerId", async (req, res) => {
  const customerId = req.params.customerId; // Replace with the actual way to get the customer ID (from request parameters or body)
  console.log("CUSTOMER ID IS", customerId);

  try {
    // Find the latest cart_id for the specific customer
    const cartQuery = `
      SELECT MAX(id) AS latest_cart_id FROM carts WHERE customers_id = $1 AND closed = FALSE;
    `;

    const cartResult = await db.query(cartQuery, [customerId]);
    console.log("the max cart is ", cartResult.rows);

    let cartId;
    if (cartResult.rows.length === 0 || cartResult.rows[0].latest_cart_id === null) {
      // If there are no carts for the customer, set cartId to 1
      cartId = 1;
    } else {
      cartId = cartResult.rows[0].latest_cart_id;
      console.log("THE CART ID is ", cartId);
    }

    // Fetch cart items for the specified customer and cart_id from the database
    const selectQuery = `
  SELECT
    cart_items.id AS cart_item_id,
    cart_items.food_item_id,
    cart_items.quantity AS food_items_quantity,
    food_items.food_name,
    food_items.price AS food_items_price,
    restaurants.restaurant_name,
    cart_items.cart_id AS cartid
  FROM
    cart_items
  INNER JOIN
    food_items
  ON
    cart_items.food_item_id = food_items.id
  INNER JOIN
    restaurants
  ON
    food_items.restaurants_id = restaurants.id
  INNER JOIN
    carts
  ON
    cart_items.cart_id = carts.id
  WHERE
    cart_items.cart_id = $1
    AND carts.closed = FALSE;
`;

    const cartItems = await db.query(selectQuery, [cartId]);
    console.log("it worked!");
    console.log(cartItems.rows);

    res.json(cartItems.rows);
  } catch (error) {
    console.error("Error fetching cart data:", error);
    res.status(500).json({ error: "An error occurred while fetching cart data." });
  }
});

module.exports = router;
