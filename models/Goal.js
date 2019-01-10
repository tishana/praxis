// the Model file for Goal
const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Habit = new mongoose.Schema({
    title: String,
    isCompleted: Boolean,
    goal: {
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    }
})
const Goal = new mongoose.Schema({
    title: String, //title of the Goal
    description: String, //description of the Goal
    dateStarted: String,
    dateGoal: String, // the date a Goal should be completed, set by User

    habits: [Habit],

    count: Number//the number of habits will be incremented when a new Habit is added
})



module.exports = {
    Goal: mongoose.model('Goal', Goal),
    Habit: mongoose.model('Habit', Habit)
}