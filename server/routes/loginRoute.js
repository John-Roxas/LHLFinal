const express = require("express");
const router = express.Router();
const {
  getCustomerLoginInfo,
} = require("../db/queries/get-customer-login-info");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
  if (username.length === 0) {
    return res.status(400).send("Please enter a username");
  }
  if (password.length === 0) {
    return res.status(400).send("Please enter a password");
  }
  getCustomerLoginInfo(username).then((result) => {
    if (!result) {
      return res.status(400).send("Username does not exist");
    }
    if (result.customer_email === username) {
      if (result.customer_password === password) {
        console.log("Successful login");
        console.log("from login route", result);
        req.session.customer = result.customer_name;
        res.send(result);
        console.log("cookie", req.session);
      } else {
        // console.log("wrong password");
        return res.status(400).send("Invalid Password");
      }
    } else {
      // console.log("wrong user");
      return res.status(400).send("Invalid Username");
    }
  });
});

module.exports = router;
