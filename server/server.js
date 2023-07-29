// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/connection");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


const search = require("./routes/search")
app.use("/api/search", search)
// const cookieSession = require("cookie-session");
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["key1"],
//   })
// );
// app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// app.use(morgan("dev"));
// app.use(
//   "/styles",
//   sassMiddleware({
//     source: __dirname + "/styles",
//     destination: __dirname + "/public/styles",
//     isSass: false, // false => scss, true => sass
//   })
// );
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const userApiRoutes = require("./routes/users-api");
// const widgetApiRoutes = require("./routes/widgets-api");
// const usersRoutes = require("./routes/users");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
// app.use("/api/users", userApiRoutes);
// app.use("/api/widgets", widgetApiRoutes);
// app.use("/users", usersRoutes);
// Note: mount other resources here, using the same pattern above
const findCustomerRoute = require('./routes/customers')
app.use("/api/customers/", findCustomerRoute)

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

//the query
// const theQuery = `
//   SELECT * FROM restaurants;
//   `;
// const insertValue = `INSERT INTO restaurants (restaurant_name,email, restaurant_street_address, city, postal_code, phone, category)
// VALUES ('Amazing Restaurant','DennysRestaurant@gmail.com', '230-4700 Kingsway', 'Burnaby, BC', 'V5H 4N2', '604 423 9400', 'malaysian');`;

const restaurantListRoutes = require("./routes/restaurantListRoutes");
const visitRestaurant = require("./routes/visitRestaurantRoutes");
// const getFood = require("./routes/getFoodRoutes");

app.use("/api/restaurants", restaurantListRoutes);
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
