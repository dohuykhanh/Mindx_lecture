const express = require("express");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const jwtKey = require("../constants/key");
const { db } = require("../db");

loginRouter.post("/", async (req, res) => {
  const msgBody = req.body;
  const query = { Name: msgBody.username, Password: msgBody.password };
  const user = await db.users.findOne(query);

  if (user === null) {
    res.status(401);
    res.json("User is not existed");
    return;
  }

  const token = jwt.sign(msgBody, jwtKey);
  res.json({ token: token });
});

module.exports = loginRouter;
