const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const User = require('../models/User')
  
//@route 
router.post('/register', async (req, res) => {

  const { username, password } = req.body

  if (!username || !password)

    return res.status(400).json({ success: false, message: 'Missing username or password' })

    try {
      // check for existing user
      const user = await User.findOne({ success: false, username: username })
      if (user)
        return res.status(400).json({success, message: 'Usernam already taken'})
      // all good
      const hashedPassword = await argon2.hash(password)
      const newUser = new User({username, password: hashedPassword})
      await newUser.save()

      //return token
      const accessToken = jwt
    
    } catch (error) {}
     
})

module.exports = router