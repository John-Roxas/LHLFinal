const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const db = require("../db/connection");

router.post("/", (req, res) => {
  console.log("This is the req.body format", req.body);
  const cartItems = req.body.orderData;
  let subtotal = parseFloat(req.body.orderTotal.subtotal).toFixed(2);
  let tax = parseFloat(req.body.orderTotal.tax).toFixed(2);
  let deliveryFee = parseFloat(req.body.orderTotal.deliveryFee).toFixed(2);
  let totalAmount = parseFloat(req.body.orderTotal.totalAmount).toFixed(2);

  let emailMessage = `Here is your order from ${req.body.orderData[0].restaurant_name}:\n\n`;
  cartItems.forEach((item) => {
    emailMessage += `${item.food_name}\n`;
    emailMessage += `Quantity: ${item.food_items_quantity}\n`;
    emailMessage += `Price: $${item.food_items_price}\n`;
    emailMessage += "---\n"; // Separator between items
  });
  emailMessage += `\nOrder Sub-Total: $${subtotal}`;
  emailMessage += `\nOrder Tax: $${tax}`;
  emailMessage += `\nOrder Delivery Fee: $${deliveryFee}`;
  emailMessage += `\nOrder Total: $${totalAmount}`;
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
