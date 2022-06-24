const express = require('express')

const app = express()

app.get('/',(req, ref) => ref.send('Hello'))

const s = 5000

app.listen(s, () => console.log(`server started on port ${s}`))