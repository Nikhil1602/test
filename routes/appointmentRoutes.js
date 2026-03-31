const express = require("express");
const router = express.Router();

const appointment = require("../controllers/appointmentController");

router.post("/", appointment.create);
router.get("/", appointment.getAll);
router.get("/:id", appointment.getOne);
router.put("/:id", appointment.update);
router.delete("/:id", appointment.delete);
router.delete("/", appointment.deleteAll);

module.exports = router;