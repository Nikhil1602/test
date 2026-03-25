const getProducts = (req, res) => {

    return res.send("Fetching all products");

}

const getProductById = (req, res) => {

    const id = req.params.id;
    return res.send(`Fetching product with ID: ${id}`);

}

const addProduct = (req, res) => {

    return res.send(`Adding a new product`);

}

module.exports = {
    getProducts,
    getProductById,
    addProduct
}