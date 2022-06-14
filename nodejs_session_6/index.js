const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const studentRouter = require('./router/student')
const {connectToDb, db} = require('./db')
app.use(bodyParser.json({ extended: true }));


app.get('/', (req, res  ) => {
    res.json('Hello world')
    console.log('database', db)
})
app.use('/student', studentRouter)

app.listen(3000, () => {
    console.log('App is running on port 3000')
    connectToDb()
})