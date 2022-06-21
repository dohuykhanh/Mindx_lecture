const { MongoClient } =require('mongodb')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = "User_Management"
const db = {}

async function connectToDb() {
    await client.connect();
    console.log('Connected successfully to Database');
    const database = client.db(dbName);

    db.users = database.collection('User');
    // the following code examples can be pasted here...
  
    return 'done.';
}

module.exports = {connectToDb , db}