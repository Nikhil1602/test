const productService = require("../services/productService");

const getAllProducts = (req, res) => {

    return res.send(productService.fetchAllProducts());

}

const getProductById = (req, res) => {

    return res.send(productService.fetchProductById(req.params.id));

}

const addProduct = (req, res) => {

    return res.send(productService.addProduct());

}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
}