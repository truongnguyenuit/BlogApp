const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.post('/register', async(req, res) => {
  const {username, password} = req.body

  if(!username || !password)
  return res.status(400)
})
 
module.exports = router