const mongoose = require('mongoose')

const Goal = new mongoose.Schema({
    title: String,
    description: String,
    dateStarted: Date,
    dateCompleted: Date,
    progress: Number
})

mongoose.model('Goal', Goal)

module.exports = mongoose