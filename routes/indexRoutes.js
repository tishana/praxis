const express = require('express')
const router = express.Router()
// const Users = require('../models/User')

router.use('/', require('../controllers/appController'))
// router.use('/user', require('../controllers/userController'))
router.use('/goal', require('../controllers/goalController'))



module.exports = router