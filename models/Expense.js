const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Expense = sequelize.define("Expense", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
}, {
    tableName: "expenses",
    timestamps: true,
});

module.exports = Expense;