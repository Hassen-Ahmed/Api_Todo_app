const cors = require("cors");
const express = require("express");
const Todo = require("./model/test.model");

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

const app = express();
app.use(cors());
app.use(express.json());

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

// db.once("open", () => {
//   app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
// });

module.exports = app;
