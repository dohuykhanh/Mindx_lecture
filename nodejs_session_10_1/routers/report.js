const express = require("express");
const reportRouter = express.Router();
const { ObjectId } = require("mongodb");
const { db } = require("../db");
const multer = require("multer");

reportRouter.get("/", async (req, res) => {
  if (req["role"] !== "admin") {
     const userId = req['userID']
      const user = await db.users.aggregate([
        // Get user 
        {$match: {
          _id: new ObjectId(userId)
        }},
        // Get report with join field report ID
        { 
          $lookup: { 
              from: 'Reports', 
              localField: 'reportId', 
              foreignField: 'ID',
              as: 'reports' 
          } 
      },
      ]).toArray()
    res.status(200);
    res.json(user[0].reports);
  } else {
    try {
      const { _id, reportID } = req.headers;
      let report;

      if (_id) {
        report = await db.reports
          .find({
            _id: new ObjectId(_id),
          })
          .toArray();
      } else if (userCustomID) {
        report = await db.reports
          .find({
            ID: +reportID,
          })
          .toArray();
      } else {
        report = await db.reports.find({}).toArray();
      }

      res.status(200);
      res.json(report);
    } catch (error) {
      res.status(500);
      res.json("Something went wrong");
    }
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    let fileType = "";
    if (file.mimetype === "application/pdf") {
      fileType = ".pdf";
    }
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = file.fieldname + "-" + uniqueSuffix + fileType
    req['fileName'] = fileName
    req['filePath'] = `/upload/${fileName}`
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });
// Max Count ==> maximum file to upload
const cpUpload = upload.fields([{ name: "report", maxCount: 2 }]);

reportRouter.post("/upload", cpUpload, async (req, res) => {
  // Implement Authorization Student ==> post report
  // Admin khong dc post report
  // Add new record to Report collection
  // Update field reportID trong User collection
  if (req['role' === 'admin']) {
    res.status(401)
    res.json('Admin is not allowed to post report')
  }

  // Path name ==> middleware cpUpload
  const path = req['filePath']
  const name = req['fileName']

  // Report ID get authen middleware
  const reportId = req['reportId']

  const count = await db.reports.count() + 1
  if (Array.isArray(reportId)) {
    reportId.push(count)
  }
  const filter = {
    _id : new ObjectId(req["userID"])
  }
  const respond = await db.reports.insertOne({
    name,
    path,
    ID: count
  })
  const respondUpdateUser = await db.users.updateOne(filter, {
    $set: {reportId}
  })
  if (respondUpdateUser.modifiedCount > 0 && respond.acknowledged) {
    res.status(201);
    res.json(respond);
  }
  else {
    res.status(500)
    res.json("Something went wrong")
  }
});

reportRouter.delete("/", async (req, res) => {
  
  if (req["role"] !== "admin") {
    res.status(401);
    res.json("Unauthorized");
  } else {
    try {
      const _id = req.headers._id;
      const filter = {
        _id: new ObjectId(_id),
      };
      const report = await db.reports.deleteOne(filter);
      if (report.deletedCount === 1) {
        console.log("Successfully deleted one document.");
        res.json(report);
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

module.exports = reportRouter;
