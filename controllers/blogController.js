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