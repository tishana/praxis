// the Model file for Goal
const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Goal = new mongoose.Schema({
    title: String, //title of the Goal
    description: String, //description of the Goal
    dateStarted: { // date the Goal was set, default to today.
        type: Date,
        default: Date.now
    },
    dateGoal: Date, // the date a Goal should be completed, set by User
    // owner: { //the User that created the Goal
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    habits: [// the Habits for a Goal
        {
            type: Schema.Types.ObjectId,
            ref: 'Habit'
        }
    ],
    count: Number//this.habits.length,  number of Habits... eh, I think.
})



module.exports = mongoose.model('Goal', Goal)