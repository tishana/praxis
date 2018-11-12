// where the application is "connected" to the database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/praxis', { useNewUrlParser: true })//my database... added { useNewUrlParser: true } after deprecation warning
mongoose.Promise = Promise
module.exports = mongoose