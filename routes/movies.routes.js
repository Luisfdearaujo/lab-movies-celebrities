// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDb) => {
      res.render("movies/movies", { movies: moviesFromDb });
    })
    .catch((err) => console.log(err));
});

router.get("/movies/create", (req, res, next) => {
  res.render("movies/new-movie");
});

//POST
router.post("/movies/create", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then((newMovie) => {
      res.redirect(`/movies`);
    })

    .catch((err) => {
      console.log(err);
      res.render("movies/new-movie");
    });
});

module.exports = router;
