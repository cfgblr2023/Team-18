const express = require("express");
const router = express.Router();

const skillController = require('../controller/skill.controller');

router.post("/", async (req, res) => {
    console.log("Skill Route");
    const skill = req.body;
    const result = await skillController.createSkill(skill);
    res.send(result);
});

router.get("/", async (req, res) => {
    console.log("Skill Route");
    const result = await skillController.getAllSkills();
    res.send(result);
});

router.get("/:id", async (req, res) => {
    console.log("Skill Route");
    const id = req.params.id;
    const result = await skillController.getSkillById(id);
    res.send(result);
});

module.exports = router;