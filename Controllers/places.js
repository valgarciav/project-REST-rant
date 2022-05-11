// create and export express.Router()
const router = require("express").Router();

//router
router.get("/new", (req, res) => {
  res.render("places/new");
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

module.exports = router;
