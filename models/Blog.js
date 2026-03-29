const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Blog = sequelize.define("Blog", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.TEXT
});

module.exports = Blog;