const express = require("express");
const router = express.Router();
const playlist = require('../playlist');

router.get("/", async (req, res) => {
    console.log("YT Route");
    const result = await playlist(req.query.q);
    res.send(result);
});

module.exports = router;


