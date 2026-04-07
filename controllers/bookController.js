const Book = require("../models/Book");

// Create Book
exports.createBook = async (req, res) => {
    const { name, issuedAt } = req.body;

    const issueTime = issuedAt ? new Date(issuedAt) : new Date();

    const returnAt = new Date(issueTime.getTime() + 60 * 60 * 1000);

    const book = await Book.create({
        name,
        issuedAt: issueTime,
        returnAt
    });

    res.json(book);
};

// Get Active Books
exports.getBooks = async (req, res) => {
    const books = await Book.findAll({ where: { returned: false } });
    res.json(books);
};

// Return Book
exports.returnBook = async (req, res) => {
    const book = await Book.findByPk(req.params.id);

    if (!book) return res.status(404).json({ msg: "Book not found" });

    const now = new Date();
    const fine = now > book.returnAt ? 300 : 0;

    book.returned = true;
    book.returnedAt = now; // 🔥 FIX

    await book.save();

    res.json({ ...book.toJSON(), fine });
};

// History
exports.getHistory = async (req, res) => {
    const books = await Book.findAll({ where: { returned: true } });
    res.json(books);
};

// GET ONE
exports.getOne = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ msg: "Not found" });
    res.json(book);
};

// UPDATE
exports.update = async (req, res) => {

    try {

        const book = await Book.findByPk(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Not found" });
        }

        const { name, issuedAt } = req.body;

        let updatedData = { name };

        // ✅ If issuedAt is updated → also update returnAt
        if (issuedAt) {

            const issueTime = new Date(issuedAt);

            updatedData.issuedAt = issueTime;
            updatedData.returnAt = new Date(issueTime.getTime() + 60 * 60 * 1000);
        }

        await book.update(updatedData);

        res.json(book);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }

};

// DELETE
exports.delete = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ msg: "Not found" });
    await book.destroy();
    res.json({ msg: "Deleted" });
};

// DELETE HISTORY
exports.deleteHistory = async (req, res) => {

    const book = await Book.findByPk(req.params.id);

    if (!book || !book.returned) {
        return res.status(404).json({ msg: "History not found" });
    }

    await book.destroy();
    res.json({ msg: "Deleted history" });

};

// DELETE ALL
exports.deleteAll = async (req, res) => {

    try {

        await Book.destroy({ where: {}, truncate: true });

        res.json({ message: "All books deleted successfully" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }

};