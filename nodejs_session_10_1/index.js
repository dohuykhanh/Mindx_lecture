const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginRouter = require("./routers/login");
const studentRouter = require("./routers/student");
const reportRouter = require("./routers/report");
const { connectToDb, db } = require("./db");
const authenticationMiddleware = require("./middleware/authentication_middleware");

app.use(bodyParser.json({ extended: true }));
app.use("/login", loginRouter);
app.use("/student", authenticationMiddleware, studentRouter);
app.use("/report", authenticationMiddleware, reportRouter);

app.get("/", (req, res) => {
  res.json("Hello World!!!");
  console.log("database", db);
});

app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("This app is running on port 3000");
  connectToDb();
});
