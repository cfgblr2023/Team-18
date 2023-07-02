const express = require("express");
const router = express.Router();
const sms = require('../sms');

router.post("/", async (req, res) => {
    console.log("SMS Route");
    const result = await sms(req.body.message, req.body.to);
    res.send(result);
});

module.exports = router;