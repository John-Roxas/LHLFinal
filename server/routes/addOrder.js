// routes/cart.js
const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// API endpoint to add items to the cart
router.post("/", async (req, res) => {
 try {
    const { cartId, customerId } = req.body;
    const date = new Date();
    const status = "closed";

    // Get cart items from the carts table based on the cartId
    const cartItemsQuery = `
      SELECT food_items_id, food_items_quantity, food_items_price, food_name
      FROM cart_items
      WHERE cart_id = $1;
    `;

    const cartItemsResult = await db.query(cartItemsQuery, [cartId]);

    // Insert the cart items into the orders table
    for (const cartItem of cartItemsResult.rows) {
      const insertOrderQuery = `
        INSERT INTO orders (cart_id, date, customers_id, food_items_id, food_items_quantity, food_items_price, food_name, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
      `;

      const values = [
        cartId,
        date,
        customerId,
        cartItem.food_items_id,
        cartItem.food_items_quantity,
        cartItem.food_items_price,
        cartItem.food_name,
        status,
      ];

      await db.query(insertOrderQuery, values);
    }

    // Update the cart status to closed
    const updateCartQuery = `
      UPDATE carts
      SET closed = TRUE
      WHERE id = $1;
    `;

    await db.query(updateCartQuery, [cartId]);

    res.json({ message: "Order created and cart status updated successfully!" });
  } catch (error) {
    console.error("Error creating order and updating cart status:", error);
    res.status(500).json({ error: "An error occurred while creating the order and updating cart status." });
  }
});

module.exports = router;
