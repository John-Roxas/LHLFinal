// routes/cart.js
const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// API endpoint to find items from the latest cart for a specific customer
router.delete("/:foodItemId", async (req, res) => {
  const foodItemId = req.params.foodItemId;

  try {
    // Perform a database query to delete the cart item with the provided foodItemId
    const deleteCartItemQuery = `
      DELETE FROM cart_items WHERE id = $1;
    `;

    await db.query(deleteCartItemQuery, [foodItemId]);

    res.status(200).json({ message: "Cart item deleted successfully." });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ error: "An error occurred while deleting the cart item." });
  }
});

module.exports = router;
