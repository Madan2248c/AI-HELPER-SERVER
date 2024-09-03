require('dotenv').config();
const express = require('express');
const textAssistant = require('./routes/textAssistant.route')
const imageAssistant = require('./routes/imageAssistant.route')
const cors = require('cors');
app = express()
app.use(express.json());
app.use(cors());
app.use('/text',textAssistant);
app.use('/image',imageAssistant)

app.listen(
    3000,()=>{
        console.log("server is running");
    }
)