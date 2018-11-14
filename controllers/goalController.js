const Goal = require('../models/Goal')
// const Habit = require('../models/Habit')
module.exports = {
    show: (req, res) => {//show one goal
        // console.log(`id ${req.params.id}`)
        Goal.findOne({ _id: req.params.id }).then(goal => {
            res.render("goal/show", goal)
        })
    },
    new: (req, res) => {//form for a new goal
        res.render('goal/new')
    }
}
    // create: (req, res) => { },
    // update: (req, res) => { },
    // delete: (req, res) => { },
    // show: (req, res) => { }

