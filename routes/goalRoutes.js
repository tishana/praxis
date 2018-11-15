const express = require('express')
const router = express.Router()
const goalController = require('../controllers/goalController')


router.get('/new', goalController.new)
router.get('/:id', goalController.show)
router.post('/', goalController.create)
router.put('/:id', goalController.update)
router.delete('/:id', goalController.delete)

module.exports = router