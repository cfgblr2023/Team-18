const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()


const user = require("./routes/user.routes");
const course = require("./routes/course.routes");
const yt = require("./routes/yt.routes");
const skill = require("./routes/skill.routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors({
    origin: ['http://localhost:3000'],
}));
app.use('/user', user);
app.use('/course', course);
app.use('/yt', yt);
app.use('/skill', skill);

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});


app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})