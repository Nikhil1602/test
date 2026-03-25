const express = require("express");
const products = require("../controllers/products");
const router = express.Router();

router.get("/", products.getProducts);

router.post("/", products.addProduct);

router.get("/:id", products.getProductById);

module.exports = router;