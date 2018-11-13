const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')

router.use('/', appController.index)
// router.use('/:id', appController.show)

module.exports = router