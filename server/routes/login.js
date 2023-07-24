const express = require("express");
const router = express.Router();
const userQuery = require("../db/queries/get-user-with-cookieid");

router.get("/login/:id", (req, res) => {
  // using encrypted cookies
  userID = req.params.id;
  //checks whether the user ID exist within the database
  userQuery
    .getUserWithCookieId(userID)
    .then((user) => {
      console.log("test", user);
      if (!user) {
        return res.send({ error: "No user with that ID" });
      }
      //If userID exist, then it sets the cookie
      req.session.user_id = req.params.id;
      console.log("user exist in database: ", req.session.user_id);
      res.redirect("/");
    })
    .catch((error) => res.send(error));
});

module.exports = router;
