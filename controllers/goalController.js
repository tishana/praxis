const Goal = require('../models/Goal')
// const Habit = require('../models/Habit')
module.exports = {
    show: (req, res) => {//show one goal
        console.log(`id ${req.params.id}`)
        Goal.findById(req.params.id)
            .then(goal => {
                console.log(goal)
            }
            )
    }
}
    // new: (req, res) => { },
    // create: (req, res) => { },
    // update: (req, res) => { },
    // delete: (req, res) => { },
    // show: (req, res) => { }

