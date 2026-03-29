const router = require("express").Router();
const blog = require("../controllers/blogController");

router.post("/", blog.createBlog);
router.get("/", blog.getBlogs);

module.exports = router;