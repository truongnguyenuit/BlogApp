const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  }
})