const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createAt: {
    type: Date
    default: Date.now
  }
})