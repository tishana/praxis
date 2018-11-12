const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: String,
    password: String
})

mongoose.model('User', User)

module.exports = mongoose