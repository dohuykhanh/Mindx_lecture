const fs = require('fs') // file system
const {sum, sub} = require('./custom_module/math')

// fs.readFile('./Mindx_1.txt','utf-8' ,(err, data) => {
//     if (err) {
//         console.log('Error of fs function:' , err)
//     }

//     console.log('data: ', data)
// })
// CRUD : Create, delete, update, Read
// const data = fs.readFileSync('./students.json' )
// const students = JSON.parse(data)
// const newStudent = {
//     id: 2,
//     name: 'Nga',
//     gender: 'F'
// }
// students['data'].push(newStudent)

// fs.writeFileSync('./students.json', JSON.stringify(students))

console.log(sub(1, 2))