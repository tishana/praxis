// the setup for the seed data for this project
const mongoose = require("./connection")
const seeds = require("./seedData")
const Goal = require("../models/Goal");
mongoose.Promise = Promise;
// const { Habit } = require("../models/Habit");

Goal.remove({}).then(_ => {
    console.log("database has been added")
    Goal.collection.insert(seeds).then(newGoals => {
        console.log(newGoals)
        mongoose.connection.close()
    })
})