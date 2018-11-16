// the Model file for User to be added later
const mongoose = require("../db/connection")
const Schema = mongoose.Schema


const User = new mongoose.Schema({
    name: String,
    password: String,
    goals: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Goal'
        }
    ]
})



module.exports = mongoose.model('User', User)