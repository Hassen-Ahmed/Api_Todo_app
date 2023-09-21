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
app.get("/todo", getAllTodo(req, res));
app.post("/todo", postTodo(req, res));
app.delete("/todo/:id", deleteTodo(req, res));
app.patch("/todo/:id", patchTodoById(req, res));

// user
app.get("/user", getAllUserById(req, res));
module.exports = app;
