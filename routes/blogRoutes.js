const router = require("express").Router();
const blogController = require("../controllers/blogController");

router.post("/", blogController.createBlog);
router.get("/", blogController.getBlogs);
router.delete("/:id", blogController.deleteBlog);
router.put("/:id", blogController.updateBlog);
router.delete("/", blogController.deleteAllBlogs);

module.exports = router;