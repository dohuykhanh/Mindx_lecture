const express = require("express");
const app = express();
const studentRouter = require('./router/students')
const studentMiddleWare = require('./middleware/student_middleware')
const LoggingMiddleWare = require('./middleware/logging_middleware')
const morgan = require('morgan')
const bodyParser = require('body-parser');
app.use(morgan('tiny'))
app.use(bodyParser.json({ extended: true }));
app.use("/student",LoggingMiddleWare ,studentMiddleWare, studentRouter)
// 1. New Request a + Second funciton running ==> success
// 2. New Request at + second function is running + Third function is running  ===> Success
app.get("/teacher", LoggingMiddleWare,(req, res) => {
    res.json('Success')
})
app.get("/class", LoggingMiddleWare,(req, res) => {
    res.json('Success')
})

app.use(express.static('assests'))
app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("Application is running on port 3000");
});
