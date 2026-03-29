const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Comment = sequelize.define("Comment", {
    text: DataTypes.STRING,
    blogId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Comment;