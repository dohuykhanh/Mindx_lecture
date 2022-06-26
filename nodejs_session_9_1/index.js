const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const {connectToDb, db} = require('./db')
app.use(bodyParser.json({ extended: true }));
const port = process.env.PORT || 3000
app.get("/", async (req, res) => {
    const student = await db.students.findOne({
        name: "Nghia"
    })

    res.status(200)
    res.json(student)
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
    connectToDb()
})