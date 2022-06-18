const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Post = require('../models/Post')

// @route GET Post api/post
// @desc Create post
// @access Private

router.get('/', verifyToken, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.userId }).populate('user', ['username'])
    res.json({ success: true, posts })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

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

// @route Pust api/post
// @desc Update post
// @access Private

router.put('/:id', verifyToken, async (req, res) => {
  const { title, description, url, status } = req.body
  // Simple validation
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: 'Title is required' })
  try {
    let updatedPost = {
      title,
      description: description || '',
      url: url.startsWith('http://') ? url : `http://${url}` || '',
      status: status || 'To learn'

    }
    const postUpdateContidion =  { _id: req.params.id, user : req.userId }

    updatePost = await Post.findByIdAndUpdate

    await newPost.save()

    res.json({ success: true, message: 'Happy learning', post: newPost })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

module.exports = router