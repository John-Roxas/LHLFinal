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
// app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const restaurantListRoutes = require("./routes/restaurantListRoutes");
const loginRoute = require("./routes/loginRoute");
const logoutRoute = require("./routes/logoutRoute");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/restaurants", restaurantListRoutes);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);

// app.get("/set-cookie", (req, res) => {
//   res.cookie("test_cookie", "hello", { maxAge: 900000, httpOnly: true });
//   res.send("Cookie set successfully");
// });

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
