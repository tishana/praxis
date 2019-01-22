const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')

router.get('/', appController.index)
router.get('/about', appController.about)

module.exports = router