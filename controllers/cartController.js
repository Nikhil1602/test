const { successResponse, errorResponse } = require("../utils/helper");

const getCartForUser = (req, res) => {

    const userId = req.params.userId;
    if (typeof userId !== "number") {
        return errorResponse(res, 400, "userId is not valid!");
    }
    return successResponse(res, 200, `Fetching cart for user with ID: ${userId}`);

}

const addProductToCart = (req, res) => {

    const userId = req.params.userId;
    if (typeof userId !== "number") {
        return errorResponse(res, 400, "userId is not valid!");
    }
    return successResponse(res, 200, `Adding product to cart for user with ID: ${userId}`);

}

module.exports = {
    getCartForUser,
    addProductToCart,
}