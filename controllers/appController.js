const express = require('express')
const router = express.Router()
const Users = require('./db/models/User')

router.get('/', (req, res) => {
    res.send('This is the root directory')
})