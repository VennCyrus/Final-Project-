const express = require("express");

const {
    fetchAllUsers, createUser, updateUser, deleteUser,
} = require("../../controllers/admin/users-controller");


const router = express.Router();
router.get("/get", fetchAllUsers);
router.post("/create", createUser);
router.put("/update/:id", updateUser);  // Update user route
router.delete("/delete/:id", deleteUser);  // Delete user route
module.exports = router;
