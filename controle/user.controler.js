const User = require("../model/user.model");

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userData = await User.find({ _id: id });
  res.status(200).send({ user: userData });
};
const getUserByUsername = async (req, res) => {
  // const { username } = req.params;
  const { username } = req.query;

  const userData = await User.find({ username: `${username}` });
  res.status(200).send({ user: userData });
};

const postUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.create({ username, password });
  user.save();
  res.status(201).send({ user: user });
};

module.exports = { getUserById, getUserByUsername, postUser };
