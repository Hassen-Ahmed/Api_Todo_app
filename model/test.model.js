const mongoose = require("mongoose");
const Todo = new mongoose.model("Todo", todoSchema);

module.exports = Todo;
