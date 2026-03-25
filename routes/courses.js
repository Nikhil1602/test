const express = require("express");
const { courses } = require("../data");
const router = express.Router();

router.get("/", (req, res) => {

    const coursesName = courses.map((x) => x.name).join(", ").trim();
    coursesName[coursesName.length - 1] = "";
    return res.status(200).send(`Courses: ${coursesName}`);

});

router.get("/:id", (req, res) => {

    const id = req.params.id;
    const idx = courses.findIndex((st) => st.id == id);

    if (idx === -1) {
        return res.status(404).send("Course not found");
    }

    return res.status(200).send(`Course: ${courses[idx].name}, Description: ${courses[idx].description}`);

});

module.exports = router;