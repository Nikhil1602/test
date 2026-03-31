const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Todo = sequelize.define("Todo", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: "todos",
    timestamps: true,
});

module.exports = Todo;