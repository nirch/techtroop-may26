const express = require("express");
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", /*validateUserId,*/ getUserById);
router.post("/", /*validateUserData,*/ createUser);
router.put("/:id", /*validateUserData,*/ updateUser);
router.delete("/:id", /*validateUserId,*/ deleteUser);

module.exports = router;