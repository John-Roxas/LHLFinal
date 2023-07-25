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
// app.use(express.static("public"));

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

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

//the query
const theQuery = `
  SELECT * FROM restaurants;
  `;

const visitRestaurant = `SELECT * FROM food_items WHERE restaurants_id = 1`;
// const insertValue = `INSERT INTO restaurants (restaurant_name,email, restaurant_street_address, city, postal_code, phone, category)
// VALUES ('Amazing Restaurant','DennysRestaurant@gmail.com', '230-4700 Kingsway', 'Burnaby, BC', 'V5H 4N2', '604 423 9400', 'malaysian');`;

app.get("/api/restaurants", (req, res) => {
  // res.render("index");
  db.query(theQuery, (err, result) => {
    // res.send(result);
    // console.log(result.rows);
    res.send(result.rows);
    // res.send("hello");
  });
});

app.get("/restaurants/1", (req, res) => {
  db.query(visitRestaurant, (err, result) => {
    res.send(result.rows);
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
