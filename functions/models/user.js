const mongoose = require("mongoose");
const validator = require("validator");

// Create schema
const userSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    default: "null"
  },
  username: {
    type: String,
    required: false,
    default: "Admin"
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: value => {
      validator.isEmail(value);
    }
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false,
    default: null
  },
  salt: String,
  createdAt: {
    type: Number,
    default: new Date().getTime()
  }
});

// Export model
module.exports = mongoose.model("User", userSchema);
