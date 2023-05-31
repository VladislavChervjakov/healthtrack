const mongoose = require("mongoose");

const sleepRecordsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  goToBedDateTime: {
    type: Date,
    required: true,
  },
  getUpDateTime: {
    type: Date,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Sleeprecords", sleepRecordsSchema);
