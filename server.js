const express = require('express');
const cors = require('cors'); 

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCWQK14wq3hZM1ZihY2BpUl1if7GSuuAkY");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});

async function getanswer(question) {
    const prompt = "Please provide a concise answer to the multiple choice question without any additional explanation. Please answer in a structured way to enhance readability The question is :  " + question
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // console.log(text);
    return text;
  }
  

app = express()
app.use(express.json());
app.use(cors());
app.post("/getanswer", async (req, res) => {
    console.log(req.body);

    try {
        const answer = await getanswer(req.body.question);
        res.send({ answer });
    } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(
    3000,()=>{
        console.log("server is running");
    }
)