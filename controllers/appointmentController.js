const Appointment = require("../models/Appointment.js");

// CREATE
exports.create = async (req, res) => {
    const data = await Appointment.create(req.body);
    res.json(data);
};

// GET ALL
exports.getAll = async (req, res) => {
    const data = await Appointment.findAll({
        order: [["createdAt", "DESC"]],
    });
    res.json(data);
};

// GET ONE
exports.getOne = async (req, res) => {
    const data = await Appointment.findByPk(req.params.id);
    res.json(data);
};

// UPDATE
exports.update = async (req, res) => {
    const item = await Appointment.findByPk(req.params.id);
    if (!item) return res.status(404).json({ msg: "Not found" });

    await item.update(req.body);
    res.json(item);
};

// DELETE
exports.delete = async (req, res) => {
    const item = await Appointment.findByPk(req.params.id);
    if (!item) return res.status(404).json({ msg: "Not found" });

    await item.destroy();
    res.json({ msg: "Deleted" });
};

// DELETE ALL
exports.deleteAll = async (req, res) => {
    await Appointment.destroy({
        where: {},
        truncate: true
    });
    res.json({ msg: "All deleted" });
};