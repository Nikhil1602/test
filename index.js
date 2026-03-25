const express = require('express');

const app = express();

const middleware = (req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
}

app.get("/products", middleware, (req, res) => {
    res.send("Here is the list of all products.");
});

app.post("/products", middleware, (req, res) => {
    res.send("A new product has been added.");
});

app.get("/categories", middleware, (req, res) => {
    res.send("Here is the list of all categories.");
});

app.post("/categories", middleware, (req, res) => {
    res.send("A new category has been created.");
});

// Start server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});