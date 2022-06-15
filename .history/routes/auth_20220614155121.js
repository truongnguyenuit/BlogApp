const express = require('express')
const router = express.Router()
const argon2 = require('argon2')

const User = require('../models/User')

router.post('/register', async (req, res) => {
  const { username, password } = req.body

  if (!username || !password)
    return res.status(400).json({ success: false, message: 'Missing username or password' })

    try {
      const user = await User.findOne({ username: username })
      if (user)
      return res.status(400).json({success, message: 'Usernam already taken'})
    

      const hashedPassword = await argon2.hash(password)
      const newUser = new User({username, password: h})

    
    }catch (error) {}
     
})

module.exports = router