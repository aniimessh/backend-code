const express = require("express");
const {
  addUser,
  getAllUsers,
  updateUser,
  getUserById,
  deleteUserById,
} = require("../controllers/UserController");
const router = express.Router();
router.post("/addUser", addUser);
router.get("/getAllUsers", getAllUsers);
router.put("/updateUser/:id", updateUser);
router.get("/getUserDetail/:id", getUserById);
router.delete("/deleteUserById/:id", deleteUserById);

module.exports = router;
