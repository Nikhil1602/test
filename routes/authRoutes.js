const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/", authController.createAuth);
router.post("/login", authController.login);
router.get("/", authController.getAuths);
router.get("/:id", authController.getAuthById);

router.put("/:id", authController.updateAuth);
router.delete("/", authController.deleteAllAuths);
router.delete("/:id", authController.deleteAuthById);

module.exports = router;