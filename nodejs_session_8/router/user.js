const express = require("express");
const { ObjectId } = require("mongodb");
const userRouter = express.Router();
const { db } = require("../db");
const bcrypt = require('bcrypt')

userRouter.post("/sign-up", async (req, res) => {
    // const name = req.body.name
    // const rank = req.body.rank
    const { name, password } = req.body;
    const saltRounds = 10;
    await bcrypt.hash(password, saltRounds,async function(err, hash) {
        // Store hash in your password DB.
        const respond = await db.users.insertOne({
          name,
          password: hash,
        });

        res.status(201);
        res.json(respond)
        if (err) {
            res.status(500)
            res.json(err)
        }
    });
    return
  });

  userRouter.post("/login", async (req, res) => {
    const { name, password } = req.body;
    const userFromDB = await db.users.findOne({
        name
    })
    // Param dau tien cua ham compare la password chua dc hash
    const isPasswordMatch = await bcrypt.compare( password, userFromDB.password)

    res.status(201);
    res.json(isPasswordMatch)
  })

module.exports = userRouter