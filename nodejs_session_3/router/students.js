const express = require("express");
const studentRouter = express.Router();

const students = [
  {
    id: 1,
    name: "Hai",
  },
  {
    id: 2,
    name: "Tu",
  },
  {
    id: 3,
    name: "Tung",
  },
];

studentRouter.get("/", (req, res) => {
    console.log('this is request from client')  
    res.json(students);
  });

studentRouter.post("/", (req, res) => {
    res.json(students)
})
module.exports = studentRouter