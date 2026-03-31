const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.post("/", bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/history", bookController.getHistory);
router.post("/return/:id", bookController.returnBook);

router.get("/:id", bookController.getOne);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.delete);

router.delete("/history/:id", bookController.deleteHistory);

module.exports = router;