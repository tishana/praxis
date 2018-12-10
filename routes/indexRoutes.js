const express = require('express')
const router = express.Router()

router.use('/', require('./appRoutes'))
router.use('/', require('./appRoutes'))
router.use('/user', require('./userRoutes'))
router.use('/goal', require('./goalRoutes'))



module.exports = router