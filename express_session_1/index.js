const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.post('/' , (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
})
