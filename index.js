const express = require('express')
const parser = require('body-parser')
const override = require('method-override')
const cors = require('cors')
// const appController = require('.')
const app = express()
//Handlebars
app.set('view engine', 'hbs')
app.use(express.static('public'))
//Body-Parser
app.use(parser.urlencoded({ extended: true })) // interprets key value pairs in URLs
app.use(parser.json()) // interprets a stringified JSON object on the request body
//Method-Override
app.use(override('_method'))
//CORS
app.use(cors())

//sending the requests to the route files MUST go after all other invocations
app.use(require('./routes/indexRoutes'))

app.listen(4000, () => {
    console.log('Alexa can hear you on port 4000')
})