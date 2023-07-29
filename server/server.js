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
const db = require("../db/connection");

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

// app.use(express.static("public"));

// Separated Routes for each Resource
const restaurantListRoutes = require("./routes/restaurantListRoutes");
const loginRoute = require("./routes/loginRoute");
const logoutRoute = require("./routes/logoutRoute");
const findCustomerRoute = require("./routes/customers");
const search = require("./routes/search");

//Mount resources app.use
app.use("/api/restaurants", restaurantListRoutes);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/api/customers/", findCustomerRoute);
app.use("/api/search", search);

//Clement organize
const visitRestaurant = require("./routes/visitRestaurantRoutes");
// const getFood = require("./routes/getFoodRoutes");
app.use("/restaurants", visitRestaurant);
// app.use("/restaurants", getFood);

const visitFood =
  "SELECT * FROM food_items WHERE restaurants_id = $1 AND id = $2";

app.get("/restaurants/:id/food_items/:foodItemId", (req, res) => {
  const restaurantId = req.params.id;
  const foodId = req.params.foodItemId;
  console.log("restaurant ID", restaurantId);
  console.log("food ID", foodId);
  db.query(visitFood, [restaurantId, foodId], (err, result) => {
    res.json(result.rows);
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
