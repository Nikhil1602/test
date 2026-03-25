const express = require("express");
const router = express.Router();

router.get("/:userId", (req, res) => {

    const userId = req.params.userId;
    return res.send(`Fetching cart for user with ID: ${userId}`);

});

router.post("/:userId", (req, res) => {

    const userId = req.params.userId;
    return res.send(`Adding product to cart for user with ID: ${userId}`);

});

module.exports = router;