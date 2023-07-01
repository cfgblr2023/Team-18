const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const userController = require('./controller/user.controller')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
    const user = req.body;
    const result = await userController.createUser(user);
    res.send(result);
});

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});


app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})