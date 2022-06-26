const fs = require('fs') // file system
const { toNamespacedPath } = require('path')
const {sum, sub} = require('./custom_module/math')

// fs.readFile('./Mindx_1.txt','utf-8' ,(err, data) => {
//     if (err) {
//         console.log('Error of fs function:' , err)
//     }

//     console.log('data: ', data)
// })
// CRUD : Create, delete, update, Read

const data = fs.readFileSync('./users.json' )
const students = JSON.parse(data)

students.forEach((student, index) => {
    if (index % 2 === 0) {
        student['role'] = 'admin'
    } else {
        student['role'] = 'student'
    }
    student['Password'] = 'ThisisPassword123'
})

fs.writeFileSync('./users.json', JSON.stringify(students))

