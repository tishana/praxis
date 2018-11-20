// the setup for the seed data for this project
const mongoose = require("./connection")
const seeds = require("./seedData.json")
const { Goal, Habit } = require('../models/Goal')
mongoose.Promise = Promise
// const { Habit } = require("../models/Habit");

// I like how you handle seed

Goal.remove({})
    .then(() => {
        // console.log("database has been added")
        return Goal.collection.insert(seeds)
    })
    .then(() => {
        process.exit()
    })
/*

I don't think you use dataStarted from your json through out your code
    "dateStarted": "11/15/2018",

*/