const express = require("express");
const router = express.Router();

const db = require("../db/connection");

router.post("/", (req, res) => {
  console.log(req.body);
  const email = req.body;
  const message = {
    to: process.env.recipientEmail,
    from: process.env.senderEmail,
    subject: "test",
    text: "email.message",
  };
  console.log(message);
  sgMail
    .send(message)
    .then(console.log("Email sent"))
    .catch((error) => console.log(error.message));
});

module.exports = router;
