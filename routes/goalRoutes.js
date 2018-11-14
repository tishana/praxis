const express = require('express')
const router = express.Router()
const goalController = require('../controllers/goalController')

router.get('/new', goalController.new)
router.get('/:id', goalController.show)
router.post('/', goalController.create)
// router.get('/:id/edit', goalController.edit)
// router.get('/')

module.exports = router