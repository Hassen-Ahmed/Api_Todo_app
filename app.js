const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const ENV = process.env.NODE_ENV || "development";

app.use(cors());

require("dotenv").config({ path: `${__dirname}/.env.${ENV}` });

const user_name = `${process.env.MONGODB_USER}`;
const user_password = `${process.env.MONGODB_PW}`;
mongoose.connect(
  `mongodb+srv://${user_name}:${user_password}@cluster1.2d5hemt.mongodb.net/?retryWrites=true&w=majority`
);

// create Schema
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

// create model
const Todo = new mongoose.model("Todo", todoSchema);

app.use(express.json());

async function getTodo() {
  const data = await Todo.find({});
  return data;
}

async function postTodo(todo, date, isDone) {
  const todos = await Todo.create({ todo, date, isDone });
  todos.save();
  return todos;
}

async function deleteTodo(id) {
  return await Todo.deleteOne({ _id: id });
}

async function patchTodoById(id, isDone) {
  return await Todo.updateOne({ _id: id }, { $set: { isDone } });
}

app.get("/", (req, res) => {
  getTodo().then((data) => {
    res.status(200).send({ todos: data });
  });
});

app.post("/", (req, res) => {
  const { todo, date = Date.now(), isDone } = req.body;
  postTodo(todo, date, isDone).then((response) => {
    res.status(201).send({ todos: response });
  });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.sendStatus(204);
  deleteTodo(id);
});

app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;

  patchTodoById(id, isDone).then((data) => {
    res.status(200).send({ todos: data });
  });
});

// const { PORT = 9090 } = process.env;
// app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
app.listen(3000);
