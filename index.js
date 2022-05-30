// Modules and Globals
require("dotenv").config();
const express = require("express");
// delete?  const methodOverride = require("method-override");
const app = express();

// Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// idk app.use(methodOverride("_method"));

// Controllers & Routes - importing routers created
app.use("/places", require("./controllers/places"));

// Homepage
app.get("/", (req, res) => {
  res.render("home");
});

// WILDCARD ROUTE - 404 - below homepage. needs to be at the bottom
app.get("*", (req, res) => {
  res.render("error404");
});

// Listen for Connections, keeps server open
app.listen(process.env.PORT);
