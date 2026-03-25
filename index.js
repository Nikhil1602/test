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

// 1. User Routes
// GET /users: Fetch all users.
// POST /users: Add a new user.
// GET /users/:id: Fetch a user by their ID.

// 2. Product Routes
// GET /products: Fetch all products.
// POST /products: Add a new product.
// GET /products/:id: Fetch a product by its ID.

// 3. Cart Routes
// GET /cart/:userId: Fetch the cart items for a specific user.
// POST /cart/:userId: Add a product to the user's cart.

// Task
// Create route files for users, products, and cart (userRoutes.js, productRoutes.js, cartRoutes.js).
// For each route, implement placeholder functionality, such as res.send() responses. For example:
// res.send("Fetching all products")

// 3.Organize your project structure by separating route files into a routes folder.
// Expected Output Example

// For /users routes:
// GET /users returns: "Fetching all users".
// POST /users returns: "Adding a new user".
// GET /users/:id returns: "Fetching user with ID: id".

// For /products routes:
// GET /products returns: "Fetching all products".
// POST /products returns: "Adding a new product".
// GET /products/:id returns: "Fetching product with ID: id".

// For /cart routes:
// GET /cart/:userId returns: "Fetching cart for user with ID: userId".
// POST /cart/:userId returns: "Adding product to cart for user with ID: userId".

// Hints
// Use Express for creating routes.
// Ensure each route handles the correct HTTP method and endpoint.
// Use route parameters by using req.params.id or req.params.userId(e.g., :id or :userId) appropriately.
// Export the routes and integrate them into the main server.js file.