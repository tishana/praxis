const Goal = require('../models/Goal')
// module.exports = {
//     index: (req, res) => {
//         res.render('../views/index', { page: 'homepage' })
//     }
// }
module.exports = {
    index: (req, res) => {//show all goals
        Goal.find({}).then(goals => {
            res.render('goal/index', {//show all found goals on goal/index layout
                goals
            })
        })
    }
    // ,
    // show: (req, res) => {//show one goal
    //     Goal.findOne({ _id: req.params.id }).then(goal => {
    //         res.render('goal/show', {//show found goal on show layout
    //             goal
    //         })
    //     })
    // }

    // new: (req, res) => { },
    // create: (req, res) => { },
    // update: (req, res) => { },
    // delete: (req, res) => { },
    // show: (req, res) => { }
}
