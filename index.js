const express = require('express');
const cors = require("cors");
const sequelize = require("./utils/db");

const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Welcome to the My Projects!");
});

app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
app.use("/products", productRoutes);
app.use("/books", bookRoutes);

app.use((req, res) => {
    res.status(404).send("Page not found");
})

sequelize.sync().then(() => {
    console.log("DB synced");
    app.listen(4000, () => console.log("Server running"));
});

