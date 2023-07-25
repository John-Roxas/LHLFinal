const express = require("express");
const router = express.Router();
const {
  getCustomerLoginInfo,
} = require("../db/queries/get-customer-login-info");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
  getCustomerLoginInfo(username, password).then((res) => {
    if (res.customer_email === username && res.customer_password === password) {
      console.log("Successful login");
      req.session.customer = res.customer_name;
    }
  });

  // console.log(getCustomerLoginInfo(username, password));
  // using encrypted cookies
  // userID = req.params.id;
  // //checks whether the user ID exist within the database
  // userQuery
  //   .getUserWithCookieId(userID)
  //   .then((user) => {
  //     console.log("test", user);
  //     if (!user) {
  //       return res.send({ error: "No user with that ID" });
  //     }
  //     //If userID exist, then it sets the cookie
  //     req.session.user_id = req.params.id;
  //     console.log("user exist in database: ", req.session.user_id);
  //     res.redirect("/");
  //   })
  //   .catch((error) => res.send(error));
});

module.exports = router;
