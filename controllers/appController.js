const express = require('express')
const router = express.Router()
const Users = require('../models/User')

router.get('/', (req, res) => {
    res.send('This is the root directory')
})

module.exports = router