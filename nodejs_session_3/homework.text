Hệ thống gồm các user như sau: 
User
[
{username: 'alice', apiKey: 'alice@123'},
  {username: 'bob', apiKey: 'bob@123'},
  {username: 'charlie', apiKey: 'charlie@123'}
]
Count Object
[
	{user: 'alice', student: 5, teacher: 1, subject: 0},
  {user: 'bob', student: 10, teacher: 1, subject: 8},
]

Hệ thống có các resource gồm: Student, Teacher và Subject. Các API được viết theo chuẩn REST.

Student [
    {
        id: 1,
        name: 'Tai',
        age: 14
    },
    {
        id: 2,
        name: 'Minh',
        age: 14
    },
    {
        id: 3,
        name: 'Nghia',
        age: 15
    }
]
Teacher [
    {
        id: 1,
        name: 'Dung',
        age: 30
    },
    {
        id: 2,
        name: 'Dai',
        age: 29
    },
    {
        id: 3,
        name: 'Quan',
        age: 25
    }
]
Subject [
    {
        id: 1,
        name: 'Toan',
    },
    {
        id: 2,
        name: 'Van',
    },
    {
        id: 3,
        name: 'Anh',
    }
]

Viết một middleware log lại các request đến hệ thống.
Viet api post list student, teacher, subject, voi body chua info cua user'
Viet middleware để đếm số lần truy cập data của từng user và update vào mảng count object