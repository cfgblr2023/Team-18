require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_API_KEY;
const client = require('twilio')(accountSid, authToken);

const sendSMS = (body, to) => {
    client.messages
        .create({
            body: body,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: to
        })
        .then(message => console.log(message.sid));
}

module.exports = sendSMS;
