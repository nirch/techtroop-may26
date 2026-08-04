const User = require("../models/User");

async function getUsers(req, res) {
  const users = await User.find();
  res.status(200).json(users);
}

async function getUserById(req, res) {
  const userId = req.params.id;
  console.log(userId);
  const user = await User.findById(userId);
  res.status(200).json(user);
}

async function createUser(req, res) {
  const newUser = new User(req.body);
  const createdUser = await newUser.save();
  res.status(201).json(createdUser);
}

async function updateUser(req, res) {
  const userId = req.params.id;
  const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(updatedUser);
}

async function deleteUser(req, res) {
  const userId = req.params.id;
  await User.findByIdAndDelete(userId);
  res.status(204).send();
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
