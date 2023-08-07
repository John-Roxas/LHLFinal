// load .env data into process.env
//Example Organization
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;
const app = express();

const db = require("./db/connection");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000", // Replace this with your frontend domain
    credentials: true, // Enable sending cookies in CORS requests
  })
);
const cookieSession = require("cookie-session");
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
    sameSite: "lax", // Adjust the sameSite value based on your setup.
    secure: false, // Set this to true if your app is served over HTTPS.
  })
);
app.use(morgan("dev"));

//SendGrid API
const API_KEY = process.env.APIKEY;
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(API_KEY);

// app.use(express.static("public"));

// Separated Routes for each Resource
const restaurantListRoutes = require("./routes/restaurantListRoutes");
const loginRoute = require("./routes/loginRoute");
const logoutRoute = require("./routes/logoutRoute");
const findCustomerRoute = require("./routes/customers");
const search = require("./routes/search");
const visitRestaurant = require("./routes/visitRestaurantRoutes");
const getFood = require("./routes/getFoodRoutes");
const emailRoute = require("./routes/email");
const orderHistoryRoute = require("./routes/orderHistory");
const addToCart = require("./routes/addToCart");
const findCart = require("./routes/findCart");
const addOrder = require("./routes/addOrder");
const deleteCartItem = require("./routes/deleteCartItem")


//Mount resources app.use
app.use("/api/restaurants", restaurantListRoutes);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/api/customers/", findCustomerRoute);
app.use("/api/search", search);
app.use("/restaurants", visitRestaurant);
app.use("/restaurant", getFood);
app.use("/email", emailRoute);
app.use("/orderhistory", orderHistoryRoute);
app.use("/api/addToCart", addToCart);
app.use("/api/findCart", findCart);
app.use("/api/addOrder", addOrder);
app.use("/api/deleteCartItem", deleteCartItem);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
