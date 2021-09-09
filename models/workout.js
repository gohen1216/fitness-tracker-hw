const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const exerciseSchema = new Schema({ 
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  }, 
  type: {
    type: String,
    trim: true,
    required: "Enter a type for workout"
  },
  duration:     { type: Number,  },
  weight:     { type: Number,  },
  reps:     { type: Number,  },
  sets:     { type: Number,  },
  distance:     { type: Number,  },
 });

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises:[exerciseSchema]
  
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