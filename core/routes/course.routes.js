const express = require("express");
const router = express.Router();

const courseController = require('../controller/course.controller');

router.post("/", async (req, res) => {
    console.log("Course Route");
    const course = req.body;
    const result = await courseController.createCourse(course);
    res.send(result);
});

router.get("/", async (req, res) => {
    console.log("Course Route");
    const result = await courseController.getCourses();
    res.send(result);
});

router.get("/:courseId", async (req, res) => {
    console.log("Course Route");
    const courseId = req.params.courseId;
    const result = await courseController.getCourseById(courseId);
    res.send(result);
});

router.get("/skill/:skillId", async (req, res) => {
    console.log("Course Route lol");
    const skillId = req.params.skillId;
    const result = await courseController.getCoursesBySkill(skillId);
    res.send(result);
});

router.put("/", async (req, res) => {
    console.log("Course Route");
    const course = req.body;
    const result = await courseController.updateCourse(course);
    res.send(result);
});

router.delete("/:courseId", async (req, res) => {
    console.log("Course Route");
    const courseId = req.params.courseId;
    const result = await courseController.deleteCourse(courseId);
    res.send(result);
});

module.exports = router;