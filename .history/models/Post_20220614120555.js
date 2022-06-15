const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  url: {
    type: String
  },
  status: {
    type: String,
    enum: ['To learn']
  }
})