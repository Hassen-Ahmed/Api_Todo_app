const mongoose = require("mongoose");
const todoSchema = require("../mongodb/schemas/schema");

const Todo = new mongoose.model("Todo", todoSchema);

module.exports = Todo;
