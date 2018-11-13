const Goal = require('../models/Goal')
// const Habit = require('../models/Habit')
module.exports = {
    show: (req, res) => {//show one goal
        Goal.findOne({ _id: req.params.id }).then(goal => {
            res.render('goal/show', {//show found goal on show layout
                goal
            })
        })
    }
    // new: (req, res) => { },
    // create: (req, res) => { },
    // update: (req, res) => { },
    // delete: (req, res) => { },
    // show: (req, res) => { }
}
