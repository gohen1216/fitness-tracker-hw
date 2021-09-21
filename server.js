// Dependencies
let { Workout } = require("./models/workout.js");

const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
// Sets up the Express App

const app = express();
const PORT = process.env.PORT||3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// Routes



app.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, '/public/exercise.html')));
app.get('/stats', (req, res) => res.sendFile(path.join(__dirname, '/public/stats.html')));
// Displays all notes
app.get('/api/workouts', (req, res) => {
  
  Workout.find({})
  .sort({ date: -1 })
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
    

});



// Create New notes - takes in JSON input
app.post('/api/workouts', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newWorkouts = req.body;

  
  Workout.create(newWorkouts)
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
    
      
 
});


app.get('/api/workouts/range', (req, res) => {
  
  Workout.find({})
  .sort({ date: -1 })
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
    

});
app.put('/api/workouts/:workoutid', (req, res) => {
  const workoutid=req.params.workoutid
  Workout.findByIdAndUpdate(workoutid,  { $push: { exercises: req.body } },)
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
    

});


// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
