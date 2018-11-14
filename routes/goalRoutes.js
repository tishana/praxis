const express = require('express')
const router = express.Router()
const goalController = require('../controllers/goalController')

router.get('/:id', goalController.show)
router.get('/goal/new', goalController.new)
// router.get('/goal/:id/edit', goalController.edit)
// router.get('/')

module.exports = router