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
  console.log('this is request from client', req.query.id)  
  res.json(students);
});
studentRouter.post("/", (req, res) => {
  const {id, name} = req.body  
  students.push({
    id,
    name,
  });
  console.log("This is request body",req.body)
  res.status(201);
  res.json(students);
});
studentRouter.put("/:id", (req, res) => {
  students[req.params.id].name = "Jack Sparrow";
  students[req.params.id].name = req.query.name
  res.json(students);
});
studentRouter.delete("/:id", (req, res) => {
  students.splice(req.params.id, 1)
  res.json(students)  
  res.send("Hello from student router");
});

module.exports = studentRouter;

// GET param ==> truyen vao trong route ("/:id")
// GET query ==> truyen vao trong route("?key=value")