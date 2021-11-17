const { Schema, model } = require("mongoose");

//  Add your code here
const newMovie = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
});

const Movie = model("Movie", newMovie);

module.exports = Movie;
