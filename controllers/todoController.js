const Todo = require("../models/Todo");

// CREATE
exports.createTodo = async (req, res) => {
    const todo = await Todo.create(req.body);
    res.json(todo);
};

// GET ALL
exports.getTodos = async (req, res) => {
    const todos = await Todo.findAll({
        order: [["createdAt", "DESC"]],
    });
    res.json(todos);
};

// UPDATE
exports.updateTodo = async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);

    if (!todo) return res.status(404).json({ message: "Not found" });

    await todo.update(req.body);
    res.json(todo);
};

// DELETE
exports.deleteTodo = async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);

    if (!todo) return res.status(404).json({ message: "Not found" });

    await todo.destroy();
    res.json({ message: "Deleted" });
};

// DELETE ALL TODOS
exports.deleteAllTodos = async (req, res) => {
    try {
        await Todo.destroy({
            where: {}, // 🔥 delete all rows
            truncate: true // resets auto-increment id
        });

        res.json({ message: "All todos deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};