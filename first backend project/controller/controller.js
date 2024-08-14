// controller/userController.js
const User = require('../models/user');

// Register a new user
const registerUser = async (req, res) => {
    try {
        const { username, email, password, gender, age } = req.body;

        const newUser = new User({
            username,
            email,
            password,
            gender,
            age
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: "Failed to create user" });
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const {id} = req.params;
        const users = await User.findById(id).sort({ createdAt: -1 }); // Sort by descending order
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to retrieve users" });
    }
};

// Edit a user
const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: "Failed to update user" });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete user" });
    }
};

module.exports = {
    registerUser,
    getAllUsers,
    editUser,
    deleteUser
};



