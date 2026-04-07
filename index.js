const express = require('express');
const cors = require("cors");
const sequelize = require("./utils/db");

require("./models");

const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");
const bookRoutes = require("./routes/bookRoutes");
const blogRoutes = require("./routes/blogRoutes");
const commentRoutes = require("./routes/commentRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const todoRoutes = require("./routes/todoRoutes");
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('view'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/products", productRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

app.use((req, res) => {
    res.status(404).send("Page not found");
})

sequelize.sync({ alter: true }).then(() => {
    console.log("DB synced");
    app.listen(4000, () => console.log("Server running"));
});

