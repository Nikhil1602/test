const express = require("express");
const cart = require("../controllers/cartController");
const router = express.Router();

router.get("/:userId", cart.getCartForUser);

router.post("/:userId", cart.addProductToCart);

module.exports = router;