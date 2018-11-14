const Goal = require('../models/Goal')
// const Habit = require('../models/Habit')
module.exports = {
    show: (req, res) => {//show one Goal
        // console.log(`id ${req.params.id}`)
        Goal.findById(req.params.id)
            .then(goal => {
                res.render('goal/show', goal)
            })
            .catch(err => {
                console.log('error', err)
            })
    },
    new: (req, res) => {//form for a new Goal
        res.render('goal/new')
    },
    create: (req, res) => {//creating a new Goal from form
        Goal.create({
            title: req.body.title,
            description: req.body.description,
            dateGoal: req.body.dateGoal
        }).then(goal => {
            res.redirect(`goal/${goal._id}`)
        })
    }//,
    // update: (req, res) => {//adding a new habit
    //     Goal.findById(req.params.id).then(goal => {
    //         res.render('goal/update', goal)
    //     })
    // }
}


    // delete: (req, res) => { },
    // show: (req, res) => { }

