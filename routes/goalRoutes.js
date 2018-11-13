const express = require('express')
const router = express.Router()
const goalController = require('../controllers/goalController')

router.use('/goal', goalController.index)
// router.use('/goal', goalController.show)
// router.use('/goal/new', goalController.new)
// router.use('/goal/:id', goalController.show)
// router.use('/goal/:id/edit', goalController.edit)
// router.use('/')

module.exports = router