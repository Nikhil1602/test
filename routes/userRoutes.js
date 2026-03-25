const express = require("express");
const users = require("../controllers/userController");
const router = express.Router();

router.get("/", users.getAllUsers);

router.post("/", users.addUser);

router.get("/:id", users.getUserById);

module.exports = router;