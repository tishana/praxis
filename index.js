const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()

app.get('/', (req, res) => {
    res.send("Welcome to Praxis, your personal habit tracker... ")
})
app.listen(4000, () => {
    console.log('Alexa can hear you on port 4000')
})