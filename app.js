const cors = require("cors");
const express = require("express");
const {
  getAllTodo,
  postTodo,
  deleteTodo,
  patchTodoById,
} = require("./controle/todo.controler");

const app = express();
app.use(cors());
app.use(express.json());

// todo
app.get("/todo", getAllTodo);
app.post("/todo", postTodo);
app.delete("/todo/:id", deleteTodo);
app.patch("/todo/:id", patchTodoById);

// user
// app.get("/user", getAllUserById);
module.exports = app;
