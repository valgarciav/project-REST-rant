// create and export express.Router()
const router = require("express").Router();
const places = require("../models/places");

//router
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/", (req, res) => {
  res.render("places/index", { places });
});

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "public/Images/hhh13-tEMU4lzAL0w-unsplash.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "public/Images/brooke-lark-of0pMsWApZE-unsplash.jpg",
    },
  ];
  res.render("places/index", { places });
});

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

module.exports = router;
