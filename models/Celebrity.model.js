const { Schema, model } = require("mongoose");

//  Add your code here
const newCelebrity = new Schema({
  name: String,
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "unknown"],
  },
  catchPrhrase: String,
});

const Celebrity = model("Celebrity", newCelebrity);

module.exports = Celebrity;
