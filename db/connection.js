// where the application is "connected" to the database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/praxis')//my database
mongoose.Promise = Promise
module.exports = mongoose