const productService = require("../services/productService");
const path = require('path');

const getAllProducts = (req, res) => {

    return res.sendFile(path.join(__dirname, "..", "view", "product.html"));

}

const getProductById = (req, res) => {

    return res.send(productService.fetchProductById(req.params.id));

}

const addProduct = (req, res) => {

    const { productName } = req.body;
    return res.send(productService.addProduct(productName));

}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
}