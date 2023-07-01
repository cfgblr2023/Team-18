const express = require("express");
const router = express.Router();

const userController = require('../controller/user.controller');

router.post("/", async (req, res) => {
    console.log("User Route");
    const user = req.body;
    const result = await userController.createUser(user);
    res.send(result);
});

module.exports = router;