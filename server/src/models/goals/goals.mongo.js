const mongoose = require("mongoose");

const Goals = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateFrom: {
    type: Date,
    required: true,
  },
  dateTo: {
    type: Date,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Goals", Goals);
