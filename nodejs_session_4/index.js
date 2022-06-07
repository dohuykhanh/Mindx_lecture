const express = require("express");
const app = express();
const User = require('./constants/User')
const Student = require('./constants/Student')
const bodyParser = require('body-parser');
const studentRouter = require('./router/student')
const loginRouter = require('./router/login')
const authenMdw = require('./middleware/authen_middleware')
app.get('/', (req, res  ) => {
    res.json(Student)
    // res.json('Hello world')
})

app.use(bodyParser.json({ extended: true }));
app.use('/login', loginRouter)
app.use('/student',authenMdw ,studentRouter)
app.listen(3000, () => {
    console.log('App is running on port 3000')
})