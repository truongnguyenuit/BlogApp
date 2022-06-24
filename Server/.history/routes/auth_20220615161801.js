const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
// @route POST api/auth/register
// @desc Register user
// @access Public 
router.post('/register', async (req, res) => {

  const { username, password } = req.body

  if (!username || !password)

    return res.status(400).json({ success: false, message: 'Missing username or password' })

    try { 

      // check for existing user
      const user = await User.findOne({ username })
      if (user)
        return res.status(400).json({ success: false, message: 'Usernam already taken' })

      // all good
      const hashedPassword = await argon2.hash(password)
      const newUser = new User({ username, password: hashedPassword })
      await newUser.save()

      //return token
      const accessToken = jwt.sign(
        {userId: newUser._id}, 
        process.env.ACCESS_TOKEN_SECRET
      )

      res.json({ success: true, message: 'User created successfully', accessToken })
    
    } catch (error) {
      console.log(error)
      res.status(500).json({ success})
    }
     
})

module.exports = router