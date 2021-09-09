const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  }
  });

const Workout = mongoose.model("workout", workoutSchema);

module.exports = {Workout};


// day: new Date().setDate(new Date().getDate()-8),
// exercises: [
//   {
//     type: "resistance",
//     name: "Push Press",
//     duration: 25,
//     weight: 185,
//     reps: 8,
//     sets: 4
//   }
// ]