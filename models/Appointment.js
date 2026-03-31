const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Appointment = sequelize.define("Appointment", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.INTEGER,
}, {
    tableName: "appointments",
    timestamps: true,
});

module.exports = Appointment;