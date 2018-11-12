const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const AppCtrlr = require('./controllers/appController')
const app = express()

// app.get('/', (req, res) => {//testing the server works
//     res.send("Welcome to Praxis, your personal habit tracker... ")
// })

//sending the requests to the controller files
app.use('/', AppCtrlr)

app.listen(4000, () => {
    console.log('Alexa can hear you on port 4000')
})