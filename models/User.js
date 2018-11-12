// the Model file for User
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