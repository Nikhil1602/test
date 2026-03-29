const router = require("express").Router();
const comment = require("../controllers/commentController");

router.post("/", comment.addComment);
router.put("/:id", comment.updateComment);
router.delete("/:id", comment.deleteComment);

module.exports = router;