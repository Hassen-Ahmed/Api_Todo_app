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
var cookieParser = require("cookie-parser");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());

// todo
app.get("/todo", getAllTodo);
app.post("/todo", postTodo);
app.delete("/todo/:id", deleteTodo);
app.patch("/todo/:id", patchTodoById);

// user
app.get("/user/:id", getUserById);
app.get("/user", getUserByUsername);
app.post("/user", postUser);

app.use("*", (req, res) => {
  res
    .cookie("hassenCookies", "{teststring : 'hi there'}", {
      maxAge: 900000,
      httpOnly: true,
      domain: "https://sticky-todos.netlify.app/todo",
    })
    .setHeader("Access-Control-Allow-Credentials", true)
    .setHeader(
      "Access-Control-Allow-Origin",
      "https://sticky-todos.netlify.app/todo"
    )
    .setHeader("Access-Control-Allow-Header", "X-Requested-with,content-type");
});
module.exports = app;
