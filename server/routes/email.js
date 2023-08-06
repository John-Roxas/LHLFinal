const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const db = require("../db/connection");

router.post("/", (req, res) => {
  console.log(req.body);
  const email = req.body;
  const message = {
    to: process.env.recipientEmail,
    from: process.env.senderEmail,
    subject: "From Food App",
    text: JSON.stringify(email),
  };
  console.log(message);
  sgMail
    .send(message)
    .then(console.log("Email sent"))
    .catch((error) => console.log(error.message));
});

module.exports = router;
