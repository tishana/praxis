const { Goal, Habit } = require('../models/Goal')
const mongoose = require('mongoose')
module.exports = {
    show: (req, res) => {//show one Goal
        // console.log(`id ${req.params.id}`)
        Goal.findById(req.params.id)
            .then(goal => {
                res.render('goal/show', goal)
            })
        // .catch(err => {
        //     console.log('error', err)
        // })
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
        })//.catch(err => {
        //     console.log('error', err)
        // })

    },
    update: (req, res) => {//adding new Habit to Goal
        let { habit } = req.body
        let { goalId } = mongoose.Types.ObjectId(req.params.id)
        Goal.findById(req.params.id).then(goal => {
            goal.habits.push({
                title: habit,
                isCompleted: false,
                goal: goalId
            })
            goal.save(err => {
                res.redirect(`/goal/${goal._id}`)
            })

        })
            .catch(err => {
                console.log(err)
            })



        //         Adding a new Habit to Goal
        // 1. User types in new Habit, clicks "Add Habit!"
        // 2. Habit is created
        // 3. Habit is pushed to Goal.habits[]
        // 4. Browser redirects to /goal/show
        // 5. Habit shows with checkbox



        // delete: (req, res) => { },
        // show: (req, res) => { }
    }
}
