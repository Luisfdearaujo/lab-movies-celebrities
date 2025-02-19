// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebritiesFromDb) => {
      res.render("celebrities/celebrities", { celebrities: celebritiesFromDb });
    })
    .catch((err) => console.log(err));
});

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

//POST
router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((newCelebrity) => {
      res.redirect(`/celebrities`);
    })

    .catch((err) => {
      console.log(err);
      res.render("celebrities/new-celebrity");
    });
});

module.exports = router;
