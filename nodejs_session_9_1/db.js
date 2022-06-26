const { MongoClient } =require('mongodb')

const url = 'mongodb+srv://theanh:theanh@cluster0.6zqy2.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = "Student_Management"
const db = {}

async function connectToDb() {
    await client.connect();
    console.log('Connected successfully to Database');
    const database = client.db(dbName);

    db.students = database.collection('Students');
    // the following code examples can be pasted here...
  
    return 'done.';
}

module.exports = {connectToDb , db}