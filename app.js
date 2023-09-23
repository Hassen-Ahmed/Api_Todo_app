const cors = require("cors");
const express = require("express");
const {
  getAllTodo,
  postTodo,
  deleteTodo,
  patchTodoById,
} = require("./controle/todo.controler");
const {
  getUserById,
  getUserByUsername,
  postUser,
} = require("./controle/user.controler");

const app = express();
app.use(cors());
app.use(express.json());

// todo
app.get("/todo", getAllTodo);
app.post("/todo", postTodo);
app.delete("/todo/:id", deleteTodo);
app.patch("/todo/:id", patchTodoById);

// user
app.get("/user/:id", getUserById);
app.get("/user", getUserByUsername);
app.post("/user", postUser);
module.exports = app;
