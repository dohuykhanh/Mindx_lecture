const express = require("express");
const studentRouter = express.Router();
const { ObjectId } = require("mongodb");
const { db } = require("../db");

studentRouter.get("/", async (req, res) => {
  // User ==> role student ==> get info cua ban than
  // User ==> role admin ==> get info cua tat ca cac user (depend vao param phia client)
  if (req["role"] !== "admin") {
    const _id = req["userID"];
    const user = await db.users
      .find({
        _id: new ObjectId(_id),
      })
      .toArray();
    res.status(200);
    res.json(user);
  } else {
    try {
      const { _id, userCustomID, name, role } = req.headers;

      let user;

      if (_id) {
        user = await db.users
          .findOne({
            _id: new ObjectId(_id),
          })
      } else if (userCustomID) {
        user = await db.users
          .find({
            ID: userCustomID,
          })
          .toArray();
      } else if (name) {
        user = await db.users
          .find({
            Name: name,
          })
          .toArray();
      } else if (role) {
        user = await db.users
          .find({
            role,
          })
          .toArray();
      } else {
        user = await db.users.find({}).toArray();
      }

      res.status(200);
      res.json(user);
    } catch (error) {
      res.status(500);
      res.json("Something went wrong");
    }
  }
});

studentRouter.post("/", async (req, res) => {
  // Chi co role admin duoc tao moi user
  if (req["role"] !== "admin") {
    res.status(401);
    res.json("Unauthorized");
  } else {
    try {
      const count = await db.users.countDocuments();
      //
      // let Name = "unknow" 
      // if (req.body.Name !== null) {
      //     Name = req.body.Name
      // }
      const {
        Name = "unknown",
        Gender = "unknown",
        Class = "unknown",
        Club = "unknown",
        Persona = "unknown",
        Crush = "unknown",
        BreastSize = "unknown",
        Strength = "unknown",
        Hairstyle = "unknown",
        Color = "unknown",
        Stockings = "unknown",
        Accessory = "unknown",
        ScheduleTime = "unknown",
        ScheduleDestination = "unknown",
        ScheduleAction = "unknown",
        Password = "unknown",
        role = "unknown",
      } = req.body;
      const respond = await db.users.insertOne({
        // ID auto increment
        ID: (count + 1).toString(),
        Name,
        Gender,
        Class,
        Club,
        Persona,
        Crush,
        BreastSize,
        Strength,
        Hairstyle,
        Color,
        Stockings,
        Accessory,
        ScheduleTime,
        ScheduleDestination,
        ScheduleAction,
        Password,
        role,
      });
      if (respond.insertedId && respond.acknowledged) {
        res.status(201);
        res.json(respond);  
      } else {
        res.status(404);
        res.json(respond);  
      }
      
    } catch (error) {
      res.status(500);
      res.json("Something went wrong");
    }
  }
});

studentRouter.put("/", async (req, res) => {
  if (req["role"] !== "admin") {
    res.status(401);
    res.json("Unauthorized");
  } else {
    try {
      const _id = req.headers._id;
      const msgBody = req.body;
      const filter = {
        _id: new ObjectId(_id),
      };
      const updateDoc = {
        $set: msgBody,
      };
      const respond = await db.users.updateOne(filter, updateDoc);
      if (respond.matchedCount > 0 && respond.modifiedCount > 0) {
        res.status(201);
        res.json(respond);
      } else {
        res.status(500);
        res.json(respond);        
      }
    } catch (err) {
      res.status(500);
      res.json("Something went wrong");
    }
  }
});

studentRouter.delete("/", async (req, res) => {
  if (req["role"] !== "admin") {
    res.status(401);
    res.json("Unauthorized");
  } else {
    try {
      const _id = req.headers._id;
      const filter = {
        _id: new ObjectId(_id),
      };
      const student = await db.users.deleteOne(filter);
      if (student.deletedCount === 1) {
        console.log("Successfully deleted one document.");
        res.json(student);
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
        res.json("No documents matched the query.");
      }
    } catch (error) {
      res.status(500);
      res.json("Something went wrong");
    }
  }
});

module.exports = studentRouter;
