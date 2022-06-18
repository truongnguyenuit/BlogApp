const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Post = require('../models/Post')

// @route GET Post api/post
// @desc Create post
// @access Private

// @route Post api/post
// @desc Create post
// @access Private

router.post('/', verifyToken, async (req, res) => {
  const { title, description, url, status } = req.body

  // Simple validation
  if (!title)
    return res.status(400).json({ success: false, message: 'Title is required' })
  try {
    const newPost = new Post({
      title: title,
      description: description,
      url: url.startsWith('http://') ? url : `http://${url}`,
      status: status || 'To Learn',
      user: req.userId
    })

    await newPost.save()

    res.json({ success: true, message: 'Happy learning', post: newPost })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

module.exports = router