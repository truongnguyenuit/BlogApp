const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.post('/register')
 
module.exports = router