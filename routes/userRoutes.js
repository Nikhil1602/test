const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    return res.send(`Fetching all users`);

});

router.post("/", (req, res) => {

    return res.send(`Adding a new user`);

});

router.get("/:id", (req, res) => {

    const id = req.params.id;
    return res.send(`Fetching user with ID: ${id}`);

});

module.exports = router;