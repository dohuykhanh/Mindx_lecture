const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "Students_Admin_Management";
const db = {};

async function connectToDb() {
  await client.connect();
  console.log("Connected successfully to database");
  const database = client.db(dbName);
  db.users = database.collection("Users");
  db.reports = database.collection("Reports");

  return "Done.";
}

module.exports = { connectToDb, db };
