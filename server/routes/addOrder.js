// routes/cart.js
const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// API endpoint to add items to the cart
router.post("/", async (req, res) => {
  try {
    const { cartId, customerId, totalAmount } = req.body;

    console.log("Received request to create order for cartId:", cartId);
    console.log("Received request to create order for customerId:", customerId);

    const date = new Date();
    const status = "closed";

    // Get cart items from the carts table based on the cartId
    const cartItemsQuery = `
  SELECT ci.cart_id, ci.quantity AS food_items_quantity, ci.food_item_price,
         f.id AS food_item_id, f.food_name, f.restaurants_id
  FROM cart_items ci
  JOIN food_items f ON ci.food_item_id = f.id
  WHERE ci.cart_id = $1;
`;

    console.log("Fetching cart items from cart_items table...");
    const cartItemsResult = await db.query(cartItemsQuery, [cartId]);

    // Calculate the total amount for the entire order
    // const totalAmount = cartItemsResult.rows.reduce((total, cartItem) => {
    //   const itemTotal = cartItem.food_items_quantity * cartItem.food_items_price;
    //   return total + itemTotal;
    // }, 0);

    // Insert the cart items into the orders table
    for (const cartItem of cartItemsResult.rows) {
      const insertOrderQuery = `
    INSERT INTO orders (cart_id, date, customers_id, drivers_id, restaurants_id, status, total_amount)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;

      const values = [
        cartId,
        date,
        customerId,
        null, // Set drivers_id to NULL, or you can fetch it from somewhere if applicable
        cartItem.restaurants_id,
        status,
        totalAmount, // orderTotal from FRONT END
      ];

      console.log(
        "Inserting order for cart item with food_name:",
        cartItem.food_name
      );
      await db.query(insertOrderQuery, values);
      console.log(
        "Order successfully inserted for cart item with food_name:",
        cartItem.food_name
      );
      break;
    }

    // Update the cart status to closed
    const updateCartQuery = `
      UPDATE carts
      SET closed = TRUE
      WHERE id = $1;
    `;

    console.log("Updating cart status to closed for cartId:", cartId);
    await db.query(updateCartQuery, [cartId]);
    console.log(
      "Cart status successfully updated to closed for cartId:",
      cartId
    );

    res.json({
      message: "Order created and cart status updated successfully!",
    });
  } catch (error) {
    console.error("Error creating order and updating cart status:", error);
    res
      .status(500)
      .json({
        error:
          "An error occurred while creating the order and updating cart status.",
      });
  }
});

module.exports = router;
