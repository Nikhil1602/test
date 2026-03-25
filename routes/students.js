const express = require("express");
const { students } = require("../data");
const router = express.Router();

router.get("/", (req, res) => {

    const studentNames = students.map(x => x.name).join(", ").trim();
    studentNames[studentNames.length - 1] = "";
    return res.status(200).send(`Students: ${studentNames}`)

});

router.get("/:id", (req, res) => {

    const id = req.params.id;
    const idx = students.findIndex((st) => st.id == id);

    if (idx === -1) {
        return res.status(404).send("Student not found");
    }

    return res.status(200).send(`Student: ${students[idx].name}`);

});

module.exports = router;