const express = require("express");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const jwtKey = require("../constants/key");
const User = require("../constants/User");

loginRouter.post("/", (req, res) => {
  console.log("This is request body", req.body);
  const msgBody = req.body;
  // Check req body co nam trong mang User khong ?
  const index = User.findIndex((el) => {
    return el.name === req.body.name && el.password === req.body.password
  });
  const isUnAuthorize = index < 0;
  if (isUnAuthorize) {
    res.json("User is not existed");
    res.status(401);
    return;
  }
  const token = jwt.sign(msgBody, jwtKey);
  res.json({
    token,
  });
});

module.exports = loginRouter;
