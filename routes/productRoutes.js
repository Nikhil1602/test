const express = require("express");
const products = require("../controllers/productController");
const router = express.Router();

router.get("/", products.getAllProducts);

router.post("/", products.addProduct);

router.get("/:id", products.getProductById);

module.exports = router;