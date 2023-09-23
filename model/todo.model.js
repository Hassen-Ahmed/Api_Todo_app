const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  date: {
    type: String,
    default: Date.now(),
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Todo = new mongoose.model("Todo", todoSchema);

module.exports = Todo;
