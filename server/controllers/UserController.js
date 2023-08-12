const users = require("../models/users");

exports.addUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const response = await users.create({ username, email, password });
    res.status(200).json({
      success: true,
      data: response,
      message: "User added succesfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error occured while adding user",
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const data = await users.find({});
    res.status(200).json({
      success: true,
      data: data,
      message: "All users fetched succesfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;
    const user = await users.findByIdAndUpdate(
      { _id: id },
      { username: username, email: email, password: password }
    );
    res.status(200).json({
      success: true,
      data: user,
      message: "User updated succesfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await users.findById({ _id: id });
    res.status(200).json({
      success: true,
      data: user,
      message: "User data fetched succesfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "error occured while fetched user data",
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await users.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: deleteUser,
      message: "User deleted succesfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "error while deleting user",
    });
  }
};
