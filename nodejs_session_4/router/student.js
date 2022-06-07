const express = require("express");
const Students = require("../constants/Student");
const studentRouter = express.Router();
const Student = require("../constants/Student");
const Users = require("../constants/User");

studentRouter.get("/", (req, res) => {
  res.json(Student);
});

studentRouter.put("/", (req, res) => {
    if (req.userRole !== 'teacher') {
        res.json('Unauthorized')
        res.status(401)
        return
    }
    const messageBody = req.body
    const index = Students.findIndex((el) => {
        return messageBody.id === el.id
    })
    Students[index].grade = req.body.grade
    res.json(Students)
});

module.exports = studentRouter;
