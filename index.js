const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const appController = require('./controllers/appController')
const app = express()

app.use(cors())
app.set('view engine', 'hbs')
// app.get('/', (req, res) => {//testing the server works
//     res.send("Welcome to Praxis, your personal habit tracker... ")
// })

//sending the requests to the controller files
app.use('/', appController)

app.use(parser.urlencoded({ extended: true })) // interprets key value pairs in URLs
app.use(parser.json()) // interprets a stringified JSON object on the request body

app.listen(4000, () => {
    console.log('Alexa can hear you on port 4000')
})