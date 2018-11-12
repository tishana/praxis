const mongoose = require('mongoose')

const Habit = new mongoose.Schema({
    title: String,
    isCompleted: Boolean,
})

mongoose.model('Habit', Habit)

module.exports = mongoose