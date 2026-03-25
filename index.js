const express = require('express');
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Student & Course Portal API!");
});

app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
app.use("/products", productRoutes);

app.use((req, res) => {
    res.status(404).send("Page not found");
})

// Start server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});

// Requirements:
// User Routes:
// GET /users:
// Output: "Fetching all users"
// POST /users:
// Output: "Adding a new user"
// GET /users/:id:
// Output: "Fetching user with ID: <id>"
// Controller: userController.js
// Logic:
// getAllUsers: Fetches all users.
// addUser: Adds a new user.
// getUserById: Fetches a specific user by ID.
// Product Routes:
// GET /products:
// Output: "Fetching all products"
// POST /products:
// Output: "Adding a new product"
// GET /products/:id:
// Output: "Fetching product with ID: <id>"
// Controller: productController.js
// Logic:
// getAllProducts: Fetches all products.
// addProduct: Adds a new product.
// getProductById: Fetches a specific product by ID.
// Cart Routes:
// GET /cart/:userId:
// Output: "Fetching cart for user with ID: <userId>"
// POST /cart/:userId:
// Output: "Adding product to cart for user with ID: <userId>"
// Controller: cartController.js
// Logic:
// getCartForUser: Fetches the cart for a user.
// addProductToCart: Adds a product to the user's cart.