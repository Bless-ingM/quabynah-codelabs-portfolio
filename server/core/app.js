// Server
const express = require("express");
const app = express();

// MongoDB
const MongoClient = require("mongodb").MongoClient;

// Data models

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// var testUrl = 'mongodb://localhost:27017';
var url =
  "mongodb+srv://quabynah:bilghazyllc2018@clustercompanion-nb97l.mongodb.net/test?retryWrites=true";
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log(err.message);
  } else {
    console.log("Connected to MongoDB backend server");
 
    // Test route
    app.get('/',(req, res) => {  
        return res.send({
            message: "Hello world"
        })
    });

    // Add tutorials

    // Get all tutorials

    // Get tutorial by ID

    // Get tutorial by Name

    // Live server
    app.listen(7000, () =>
      console.log("Server started...")
    );
  }
});

module.exports = app;
