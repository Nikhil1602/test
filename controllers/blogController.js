const Blog = require("../models/Blog");
const Comment = require("../models/Comment");

// Create blog
exports.createBlog = async (req, res) => {
    const blog = await Blog.create(req.body);
    res.json(blog);
};

// Get all blogs with comments
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            include: {
                model: Comment,
                as: "comments"
            }
        });

        res.json(blogs);
    } catch (err) {
        console.error("FULL ERROR:", err); // 👈 IMPORTANT
        res.status(500).json({ error: err.message });
    }
};

// UPDATE BLOG
exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);

        if (!blog) {
            return res.status(404).json({ msg: "Blog not found" });
        }

        const { title, author, content } = req.body;

        await blog.update({
            title,
            author,
            content
        });

        res.json(blog);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE ALL BLOGS
exports.deleteAllBlogs = async (req, res) => {
    try {

        await Comment.destroy({ where: {} });

        await Blog.destroy({
            where: {},
        });

        res.json({ message: "All blogs deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE SINGLE BLOG
exports.deleteBlog = async (req, res) => {

    try {
        const blog = await Blog.findByPk(req.params.id);

        if (!blog) {
            return res.status(404).json({ msg: "Blog not found" });
        }

        await blog.destroy();

        res.json({ message: "Blog deleted successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};