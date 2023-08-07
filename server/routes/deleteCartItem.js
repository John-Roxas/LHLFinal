// routes/cart.js
const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// API endpoint to delete a cart item
router.delete("/:cartItemId", async (req, res) => {
  const cartItemId = req.params.cartItemId;

  try {
    console.log("Deleting cart item with cartItemId:", cartItemId);

    // Perform a database query to delete the cart item with the provided cartItemId
    const deleteCartItemQuery = `
      DELETE FROM cart_items WHERE id = $1;
    `;

    await db.query(deleteCartItemQuery, [cartItemId]);

    console.log("Cart item deleted successfully.");

    res.status(200).json({ message: "Cart item deleted successfully." });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ error: "An error occurred while deleting the cart item." });
  }
});

module.exports = router;
