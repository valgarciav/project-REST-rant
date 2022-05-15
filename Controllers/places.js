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

//POST
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

//EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})

//SHOW
//In order to use it this way, we will need to cast req.params.id to a number. If it is not a number, we will want to render the 404 error page. We can check if something is not a number by using the built-in function isNaN().
//You will need to parse the array index from req.params.id like we did earlier. Render the error page if you run into any bad data.
//Change your delete route to actually delete the item from the array. We can do this with the built-in array splice() method.
//Redirect your user to the index page.

//DELETE
router.delete('/places/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})




//pass data in places [id]

module.exports = router;
