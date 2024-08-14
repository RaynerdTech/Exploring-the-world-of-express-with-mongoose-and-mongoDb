// route/route.js
const express = require("express");
const router = express.Router();
const { registerUser, getAllUsers, editUser, deleteUser } = require("../controller/controller");

router.post('/users', registerUser); // Register a new user
router.get('/users/:id', getAllUsers); // Get all users
router.put('/users/:id', editUser); // Edit a user
router.delete('/users/:id', deleteUser); // Delete a user

module.exports = router;



