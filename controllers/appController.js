const express = require('express')
const router = express.Router()
const Users = require('../models/User')

router.get('/', (req, res) => {//homepage
    res.render('../views/index', { page: 'homepage' })
})
// router.use('/user')

router.get('/:id', (req, res) => {
    res.send('You are requesting to see a User')
})

module.exports = router