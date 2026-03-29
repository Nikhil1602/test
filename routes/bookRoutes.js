const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/bookController");

router.post("/", ctrl.createBook);
router.get("/", ctrl.getBooks);
router.post("/return/:id", ctrl.returnBook);
router.get("/history", ctrl.getHistory);

module.exports = router;