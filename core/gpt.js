const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function run(query) {
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You help with making a precise and basic road map. Your response will only have topic names seperated by newlines." },
            { role: "user", content: "Give a roadmap for "+ query + "." },
        ],
    });
    console.log(chatCompletion.data.choices[0].message);
    return chatCompletion.data.choices[0].message.content;
}

module.exports = run;