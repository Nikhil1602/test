const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Book = sequelize.define("Book", {
    name: DataTypes.STRING,
    issuedAt: DataTypes.DATE,
    returnAt: DataTypes.DATE,
    returned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Book;