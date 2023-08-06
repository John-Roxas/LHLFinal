const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const db = require("../db/connection");

router.post("/", (req, res) => {
  console.log(req.body);
  const cartItems = req.body;
  let emailMessage = `Here is your order from ${req.body[0].restaurant_name}:\n\n`;
  cartItems.forEach((item) => {
    emailMessage += `Food Name: ${item.food_name}\n`;
    emailMessage += `Food Items Quantity: ${item.food_items_quantity}\n`;
    emailMessage += `Price: $${item.food_items_price}\n`;
    emailMessage += "---\n"; // Separator between items
  });
  const message = {
    to: process.env.recipientEmail,
    from: process.env.senderEmail,
    subject: "Your Order Details",
    text: emailMessage,
  };
  console.log(message);
  sgMail
    .send(message)
    .then(console.log("Email sent"))
    .catch((error) => console.log(error.message));
});

module.exports = router;
