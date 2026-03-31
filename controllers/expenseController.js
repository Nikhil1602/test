const Expense = require("../models/Expense");

// CREATE
exports.createExpense = async (req, res) => {
    try {
        const expense = await Expense.create(req.body);
        res.status(201).json(expense);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll({
            order: [["date", "DESC"]],
        });
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ONE
exports.getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findByPk(req.params.id);
        if (!expense) return res.status(404).json({ message: "Not found" });
        res.json(expense);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.updateExpense = async (req, res) => {
    try {
        const expense = await Expense.findByPk(req.params.id);
        if (!expense) return res.status(404).json({ message: "Not found" });

        await expense.update(req.body);
        res.json(expense);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByPk(req.params.id);
        if (!expense) return res.status(404).json({ message: "Not found" });

        await expense.destroy();
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE ALL EXPENSES
exports.deleteAllExpenses = async (req, res) => {
    try {
        await Expense.destroy({
            where: {},       // delete all rows
            truncate: true   // reset auto-increment
        });

        res.json({ message: "All expenses deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};