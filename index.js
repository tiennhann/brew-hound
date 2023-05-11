/*
@Author: Isaias Melendez
@Date Updated: 2-15-23
@Purpose: To establish server connection to OpenAI's API 

******************************************************************************************/

//Requiring configuration from OpenAi
const { Configuration, OpenAIApi } = require("openai");

//Require Express and set up requirement for app
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Set configuration
const configuration = new Configuration({
    organization: "org-kEwgv19yejikr6in1u9L89AO",
    
    //My current OpenAI key is placed here
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

//Set up instance of port number and app instance
const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 3080

//App async post request to gather data
app.post('/', async (req, res) => {
    const {message} = req.body;
    console.log(message, "message")
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pretend you are an expert brewer. Answer with beer recommendations. 
                 ${message}?`,
        max_tokens: 100,
        temperature: 0,
      });
      
      //Json Response to get data from OpenAI
      res.json({
        message: response.data.choices[0].text,
      })
});

//Have the app listen on localhost for responses 
app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`)
}); 