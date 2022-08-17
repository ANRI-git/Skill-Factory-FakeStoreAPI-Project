const users = require("../models/user");

const getAllUsers = async (req, res) => {
  let allUsers = await users.getAllUsers();
  res.status(200).send(allUsers);
};

const getSingleUser = async (req, res) => {
  let singleUser = await users.getSingleUser(req.params.id);
  res.status(200).send(singleUser);
};

const getFirsts = async (req, res) => {
  let allUsers = await users.getAllUsers();
  let firstsUSers = allUsers.slice(0, 3);
  res.status(200).send(firstsUSers);
};

let userController = {
  getAllUsers,
  getSingleUser,
  getFirsts,
};

module.exports = userController;
