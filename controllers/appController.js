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


    // new: (req, res) => { },
    // create: (req, res) => { },
    // update: (req, res) => { },
    // delete: (req, res) => { },
    // show: (req, res) => { }
}
