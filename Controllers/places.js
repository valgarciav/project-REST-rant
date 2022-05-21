const router = require("express").Router();
const db = require("../models");

// INDEX
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("Places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

// NEW
router.get("/new", (req, res) => {
  res.render("places/new");
});

// DELETE
router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

// CREATE
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

// GET EDIT FORM
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

// PUT EDITS
router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

// SHOW
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

module.exports = router;
