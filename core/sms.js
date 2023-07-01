require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_API_KEY;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Code for good is awesome!',
        from: '+14847349651',
        to: '+918431112350'
    })
    .then(message => console.log(message.sid));

