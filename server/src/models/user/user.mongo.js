const mongoose = require("mongoose");

const User = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  photo: String,
  password: {
    type: String,
    required: true,
    minlength: 9,
  },
});

module.exports = mongoose.model("User", User);
