const express = require('express')
const router = express.Router()
const goalController = require('../controllers/goalController')

router.use('/', goalController.index)