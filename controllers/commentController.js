const Comment = require("../models/Comment");

// Add comment
exports.addComment = async (req, res) => {
    const { text, blogId } = req.body;
    const comment = await Comment.create({ text, blogId });
    res.json(comment);
};

// Update comment
exports.updateComment = async (req, res) => {
    await Comment.update(
        { text: req.body.text },
        { where: { id: req.params.id } }
    );
    res.json({ message: "Updated" });
};

// Delete comment
exports.deleteComment = async (req, res) => {
    await Comment.destroy({
        where: { id: req.params.id }
    });
    res.json({ message: "Deleted" });
};