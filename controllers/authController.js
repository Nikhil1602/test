const Auth = require("../models/Auth");

// Create auth
exports.createAuth = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email and password are required" });
    }

    const auth = await Auth.create(req.body);
    return res.json(auth);
};

// Login auth
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const auth = await Auth.findOne({ where: { email } });
    if (!auth) {
        return res.status(404).json({ error: "Auth not found" });
    }

    return res.json({ message: "Login successful", auth });
};


// Get all auths
exports.getAuths = async (req, res) => {
    try {
        const auths = await Auth.findAll();
        if (auths.length === 0) {
            return res.status(404).json({ error: "No auths found" });
        }
        res.json(auths);
    } catch (err) {
        console.error("FULL ERROR:", err); // 👈 IMPORTANT
        return res.status(500).json({ error: err.message });
    }
};

// UPDATE AUTH
exports.updateAuth = async (req, res) => {
    try {
        const auth = await Auth.findByPk(req.params.id);
        if (!auth) {
            return res.status(404).json({ error: "Auth not found" });
        }
        await auth.update(req.body);
        return res.json(auth);
    } catch (err) {
        console.error("FULL ERROR:", err); // 👈 IMPORTANT
        return res.status(500).json({ error: err.message });
    }
};

// DELETE ALL AUTHS
exports.deleteAllAuths = async (req, res) => {
    try {
        await Auth.destroy({
            where: {},
            truncate: true
        });
        return res.json({ message: "All auths deleted" });
    } catch (err) {
        console.error("FULL ERROR:", err); // 👈 IMPORTANT
        return res.status(500).json({ error: err.message });
    }
};

// DELETE AUTH BY ID
exports.deleteAuthById = async (req, res) => {
    try {
        const auth = await Auth.findByPk(req.params.id);
        if (!auth) {
            return res.status(404).json({ error: "Auth not found" });
        }
        await auth.destroy();
        return res.json({ message: "Auth deleted" });
    } catch (err) {
        console.error("FULL ERROR:", err); // 👈 IMPORTANT
        return res.status(500).json({ error: err.message });
    }
};


// Get auth by ID
exports.getAuthById = async (req, res) => {
    try {
        const auth = await Auth.findByPk(req.params.id);
        if (!auth) {
            return res.status(404).json({ error: "Auth not found" });
        }
        return res.json(auth);
    } catch (err) {
        console.error("FULL ERROR:", err); // 👈 IMPORTANT
        return res.status(500).json({ error: err.message });
    }
};

