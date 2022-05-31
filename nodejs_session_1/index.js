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

const data = fs.readFileSync('./students.json' )
const students = JSON.parse(data)

students['data'].splice(students['data'].length - 1,1)

const newStudent = {
    data: [
        {
            id: 1,
            name: 'Toan',
            Gender: 'M'
        }
    ]
}

fs.writeFileSync('./students.json', JSON.stringify(students))

