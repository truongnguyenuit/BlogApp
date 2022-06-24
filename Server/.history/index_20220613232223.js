const express = require('express')

const app = express()

app.get('/',(req, ref) => ref.send('Hello'))

const POST = 5000

app.listen(, () => console.log(`server started on port ${s}`))