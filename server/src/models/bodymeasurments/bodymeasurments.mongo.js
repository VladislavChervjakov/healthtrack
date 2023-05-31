const mongoose = require("mongoose");

const BodyMeasurments = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("BodyMeasurments", BodyMeasurments);
