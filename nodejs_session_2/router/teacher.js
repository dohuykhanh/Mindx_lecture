// Step 1: Tao route cho teacher
// Step 2: Tao const dang array luu 3 phan tu

//
// Step 3:
// Tao method GET ==> return ve mang teacher;
// Tao method POST ==> them phan tu vao mang teacher;
// PUT ==> update phan tu 2 ==> name: Khai, job: "supporter"
// DELETE ==> Xoa phan tu cuoi cung cua mang teacher
const express = require("express");
const teacherRouter = express.Router();

const teachers = [
  {
    id: 1,
    name: "Tuan",
    job: "teacher",
  },
  {
    id: 2,
    name: "Minh",
    job: "teacher",
  },
  {
    id: 3,
    name: "Vu",
    job: "teacher",
  },
];

teacherRouter.get("", (req, res) => {
  // Return ve mang teacher  
  res.json(teachers);
});

teacherRouter.post("", (req, res) => {
//   const id = req.body.id  
//   const name = req.body.name
//   const job = req.body.job  
  let { id, name, job } = req.body;
  teachers.push({
    id: id,
    name: name,
    job: job,
  });
  res.status(201);
  res.json(teachers);
});

teacherRouter.put("", (req, res) => {
  teachers[1].name = "Khai";
  teachers[1].job = "supporter";
  res.json(teachers);
});

teacherRouter.delete("", (req, res) => {
  teachers.pop();
  res.json(teachers);
});

module.exports = teacherRouter;