require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.TOKEN);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

var ImageAssistantHelper = {
    route : '/image',

    getDescription : async function (imageUrl) {
        var prompt = `Provide a concise summary of the following image, capturing the essential points and main ideas while omitting extraneous details. Present the summary in a clear and coherent manner, formatted as an HTML string suitable for display on a website. Use appropriate HTML tags like <p>, <strong>, and <em> to highlight key aspects and ensure readability.Provide the output as plain text without any additional formatting or code blocks. The image is ${imageUrl}`;
        // `provide a description of the image : ${imageUrl}`
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    }
};

module.exports = ImageAssistantHelper