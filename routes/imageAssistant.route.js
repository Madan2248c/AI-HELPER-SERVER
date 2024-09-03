const express = require('express')
const imageAssistantHelper = require('../helpers/imageAssistant.helper')
const router = express.Router()

router.post('/',async (req,res) => {
    const action = req.query.action;
    const content = req.body.content;
    if (action === "describeImage") {
        var describeImage = await imageAssistantHelper.getDescription(content);
        res.send({ describeImage });
    }
})

module.exports = router