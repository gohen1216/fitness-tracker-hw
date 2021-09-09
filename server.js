// Dependencies

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



app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// Displays all notes
app.get('/api/notes', (req, res) => {
   
    

});



// Create New notes - takes in JSON input
app.post('/api/notes', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newNote = req.body;

  
 
    
  
 
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));