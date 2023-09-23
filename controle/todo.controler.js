const Todo = require("../model/todo.model");

const getAllTodo = async (req, res) => {
  const data = await Todo.find({});
  res.status(200).send({ todos: data });
};

const postTodo = async (req, res) => {
  const { todo, date = Date.now(), isDone, userId } = req.body;

  const todos = await Todo.create({ todo, date, isDone, userId });
  todos.save();
  res.status(201).send({ todos: todos });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.deleteOne({ _id: id });
    res.sendStatus(204);
  } catch (err) {
    console.log("Error happend on delete! --------->>", err.message);
  }
};

const patchTodoById = async (req, res) => {
  const { id } = req.params;
  const { todo, isDone } = req.body;

  try {
    const data = await Todo.updateOne({ _id: id }, { $set: { todo, isDone } });
    res.status(200).send({ todos: data });
  } catch (err) {
    console.log("patchTodoById-------->>", err.message);
  }
};

module.exports = {
  getAllTodo,
  postTodo,
  deleteTodo,
  patchTodoById,
};
