const productService = require("../services/productService");
const { successResponse, errorResponse } = require("../utils/helper");
const path = require('path');

const getAllProducts = (req, res) => {

    return res.sendFile(path.join(__dirname, "..", "view", "product.html"));

}

const getProductById = (req, res) => {

    const id = req.params.id;

    if (typeof id !== "number") {
        return errorResponse(res, 400, "Id is invalid!");
    }

    const msg = productService.fetchProductById(id);

    return successResponse(res, 200, msg);

}

const addProduct = (req, res) => {

    const { productName } = req.body;

    if (productName !== "") {
        return errorResponse(res, 404, "productName not found!")
    }

    const msg = productService.addProduct(productName);

    return successResponse(res, 200, msg);


}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
}