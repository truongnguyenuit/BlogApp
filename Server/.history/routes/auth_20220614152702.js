const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.post('/register', async (req, res) => {
  const { username, password } = req.body

  if (!username || !password)
    return res.status(400).json({ success: false, message: 'Missing username or password' })

    try {
      const user = await User.findOne({ username: username })
    }
    if (user)
    {
      
    }
})

module.exports = router