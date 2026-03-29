const Book = require("../models/Book");

// Create Book
exports.createBook = async (req, res) => {
    const { name } = req.body;

    const issuedAt = new Date();
    const returnAt = new Date(issuedAt.getTime() + 60 * 60 * 1000); // +1 hour

    const book = await Book.create({ name, issuedAt, returnAt });
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

    const now = new Date();
    const fine = now > book.returnAt ? 300 : 0;

    book.returned = true;
    await book.save();

    res.json({ ...book.toJSON(), fine });
};

// History
exports.getHistory = async (req, res) => {
    const books = await Book.findAll({ where: { returned: true } });
    res.json(books);
};