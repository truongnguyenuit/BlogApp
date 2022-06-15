const express = require('express')

const app = express()

app.get('/',(req, res) => res.send('Hello'))

const POST = 5000

app.listen(PORT, () => console.log(`server started on port ${}`))