// Server
const express = require("express");
const app = express();

// JWT
const jwt = require("jsonwebtoken");

// Cors
const cors = require("cors");

// Morgan
const morgan = require("morgan");

// Validator
const validator = require("validator");

// MongoDB
const MongoClient = require("mongodb").MongoClient;

// Data models
const User = require("../models/user");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// var testUrl = 'mongodb://localhost:27017';
var url =
  "mongodb+srv://quabynah:bilghazyllc2018@clustercompanion-nb97l.mongodb.net/test?retryWrites=true";
MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log(error.message);
  } else {
    console.log("Connected to MongoDB backend server");

    // Get database and collections
    var db = client.db("codelabs");
    var users = db.collection("users");
    // var tutorials = db.collection('tutorials');

    // Test route
    app.get("/", (req, res) => {
      return res.send({
        message: "Hello world"
      });
    });

    // Create user
    app.post("/user/create", async (req, res) => {
      if (req.body) {
        // Get input values from body
        var email = req.body.email;
        var password = req.body.password;

        if (validator.isEmail(email) && !validator.isEmpty(password)) {
          users
            .findOne({ email })
            .then(result => {
              console.log(result);
              if (result) {
                return res.json({
                  message: "User with this email address already exists"
                });
              } else {
                var key = jwt.sign({ foo: "bar" }, "shhhhh");
                users
                  .insertOne(
                    new User({
                      key,
                      email,
                      password
                    })
                  )
                  .then(() => {
                    return res.json({
                      message: "User created successfully"
                    });
                  })
                  .catch(err => {
                    console.log(err.message);
                    return res.status(404).json(err);
                  });
              }
            })
            .catch(err => {
              console.log(err.message);
              return res.status(404).json(err);
            });
        } else {
          return res.json({
            message:
              "Invalid login request. Please pass in your email and password"
          });
        }
      } else {
        return res.json({
          message:
            "Invalid login request. Please pass in your email and password"
        });
      }
    });

    // Login user
    app.post("/user/login", (req, res) => {
      if (req.body) {
        // Get input values from body
        var email = req.body.email;
        var password = req.body.password;

        if (validator.isEmail(email) && !validator.isEmpty(password)) {
          users
            .findOne({ email })
            .then(result => {
              console.log(result);
              if (result) {
                return res.json(result);
              } else {
                return res.json({
                  message: "Could not find a user with this email address"
                });
              }
            })
            .catch(err => {
              console.log(err.message);
              return res.status(404).json(err);
            });
        } else {
          return res.json({
            message:
              "Invalid login request. Please pass in your email and password"
          });
        }
      } else {
        return res.json({
          message:
            "Invalid login request. Please pass in your email and password"
        });
      }
    });

    // Add tutorials

    // Get all tutorials

    // Get tutorial by ID

    // Get tutorial by Name

    // Live server
    app.listen(7000, () => console.log("Server started..."));
  }
});

module.exports = app;
