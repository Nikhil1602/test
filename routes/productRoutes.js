const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    return res.send(`Fetching all products`);

});

router.post("/", (req, res) => {

    return res.send(`Adding a new product`);

});

router.get("/:id", (req, res) => {

    const id = req.params.id;
    return res.send(`Fetching product with ID: ${id}`);

});

module.exports = router;