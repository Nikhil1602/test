const fetchAllProducts = () => {

    return "Fetching all products";

}

const fetchProductById = (id) => {

    return `Fetching product with ID: ${id}`;

}

const addProduct = (product) => {

    return `Adding a new product: ${product}`;

}

module.exports = {
    fetchAllProducts,
    fetchProductById,
    addProduct
}