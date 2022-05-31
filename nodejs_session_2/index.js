const express = require('express')
const app = express()
const studentRouter = require('./router/students')
const bodyParser = require('body-parser');
const port = 3000
app.use(bodyParser.json({ extended: true }));
app.get('/home', (req, res) => {

  res.send('This is home page')
})
app.use('/student', studentRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

