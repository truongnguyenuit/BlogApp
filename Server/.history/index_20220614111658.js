const express = require('express')
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://vrttankzz:0918972561@hanabooking.8pucz8k.mongodb.net/?retryWrites=true&w=majority`, 
      {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false, 
    })
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  } 
}

const app = express()

app.get('/', (req, res) => res.send('Hello world!'))

const PORT = 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))