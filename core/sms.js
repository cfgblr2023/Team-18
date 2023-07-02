require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_API_KEY;
const client = require('twilio')(accountSid, authToken);
const from = "whatsapp:" + process.env.TWILIO_PHONE_NUMBER;

const sendSMS = (body, to) => {
    client.messages
        .create({
            body: body,
            from: from,
            to: "whatsapp:" + to
        })
        .then(message => console.log(message.sid));

    return "Message sent";
}

module.exports = sendSMS;
