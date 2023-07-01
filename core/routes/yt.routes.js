const express = require("express");
const router = express.Router();
const playlist = require('../playlist');
const gpt = require('../gpt');

router.get("/", async (req, res) => {
    console.log("YT Route");
    const result = await playlist(req.query.q);
    res.send(result);
});

router.get("/ai", async (req, res) => {
    console.log("YT AI Route");
    const result = await gpt(req.query.q);
    qs = result.split("\n");
    const plays = []
    try {
        await Promise.all(qs.map(async q => {
            const r = {}
            r.id = await playlist(q);
            r.module = q;
            plays.push(r);
        }));
    } catch (e) {
        console.log(e);
    }
    res.send(plays);
});

module.exports = router;