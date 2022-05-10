// create and export express.Router()
const router = require("express").Router();

//make a first route in places.js
router.get("/", (req, res) => {
  res.send("GET /places");
});

// GET /places
app.get("/", (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  }
  ];
  res.render('places/index', { places })

});

module.exports = router;
