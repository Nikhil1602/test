const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Auth = sequelize.define("Auth", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,

}, {
    tableName: "auths",
    timestamps: true,
});

module.exports = Auth;