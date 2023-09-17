const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: String,
  date: {
    type: String,
    default: Date.now(),
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

module.exports = todoSchema;
