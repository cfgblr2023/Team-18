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
    // res.send([
    //     {
    //         "id": "Qp_9DxdaxDc",
    //         "module": "Applications of Trigonometry"
    //     },
    //     {
    //         "id": "PUB0TaZ7bhA",
    //         "module": "Sine, Cosine, and Tangent Functions"
    //     },
    //     {
    //         "id": "PUB0TaZ7bhA",
    //         "module": "Right Triangle Trigonometry"
    //     },
    //     {
    //         "id": "xp6ibuI8UuQ",
    //         "module": "Vectors and Trigonometry in Two Dimensions"
    //     },
    //     {
    //         "id": "ubO1PcrN2b4",
    //         "module": "Introduction to Trigonometry"
    //     },
    //     {
    //         "id": "nf2id-6PrQY",
    //         "module": "Inverse Trigonometric Functions"
    //     },
    //     {
    //         "id": "JJMZJFWMrpM",
    //         "module": "Trigonometry in Three Dimensions"
    //     },
    //     {
    //         "id": "8RasCV_Lggg",
    //         "module": "Polar Coordinates and Complex Numbers"
    //     },
    //     {
    //         "id": "ujS6520gt0Y",
    //         "module": "Angles and Their Measures"
    //     },
    //     {
    //         "id": "kOUgxU_POXU",
    //         "module": "Graphs of Trigonometric Functions"
    //     },
    //     {
    //         "id": "5m1Pc8DHjQI",
    //         "module": "Trigonometric Identities"
    //     },
    //     {
    //         "id": "O6s9zSl1mPY",
    //         "module": "Trigonometric Equations"
    //     }
    // ]);
    const result = await gpt(req.query.q);
    qs = result.split("\n");
    // give serial number to each query
    for (let i = 0; i < qs.length; i++) {
        qs[i] = {
            "serial": i,
            "query": qs[i]
        }
    }

    
    const plays = []
    try {
        await Promise.all(qs.map(async q => {
            const r = {}
            r.id = await playlist(q.query);
            r.module = q.query;
            r.serial = q.serial;
            plays.push(r);
        }));
    } catch (e) {
        console.log(e);
    }
    // sort the playlist according to serial number
    plays.sort((a, b) => {
        return a.serial - b.serial;
    });
    res.send(plays);
});

module.exports = router;