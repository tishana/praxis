// the setup for the seed data for this project
const mongoose = require("./connection")
const seeds = require("./seedData.json")
const Goal = require("../models/Goal");
mongoose.Promise = Promise;
// const { Habit } = require("../models/Habit");

Goal.remove({})
    .then(() => {
        // console.log("database has been added")
        return Goal.collection.insert(seeds)
    })
    .then(() => {
        process.exit()
    })
