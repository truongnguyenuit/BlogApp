const express = require('express')
const mongoose = require('mo')
const app = express()

app.get('/',(req, res) => res.send('Hello world!'))

const PORT = 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))