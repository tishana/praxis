// the Model file for Habit
const mongoose = require("../db/connection")

const Habit = new mongoose.Schema({
    title: String,
    isCompleted: Boolean,
    goal: {
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    }
})



module.exports = mongoose.model('Habit', Habit)