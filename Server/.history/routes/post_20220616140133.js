const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

// @route Post api/post
// @desc Create post
// @access Private
router.post('/', async (req, res) => {
  const { title, description, url, status } = req.body

  // Simple validation
  if (!title)
    return res.status(400).json({ success: false, message: 'Title is required' })
  try {
    const newPost = new Post({title, description, url: (url.startWith('http://')) ? url})
  }
})