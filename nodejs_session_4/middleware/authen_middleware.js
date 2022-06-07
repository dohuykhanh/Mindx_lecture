const jwt = require('jsonwebtoken')
const jwtKey = require('../constants/key')
const User = require('../constants/User')

function authenMdw (req, res, next) {
    const token = req.headers.authorization.split(" ")[1]
    let decode
    try {
        decode = jwt.verify(token, jwtKey) 
    } catch (err) {
        res.json(err.message)
        res.status(401)
        return        
    }
    if (decode) {
        const index = User.findIndex((el) => {
            return decode.name === el.name && decode.password === el.password
        })
        if (index < 0) {
            res.json('User is not existed')
            res.status(401)
            return
        }
        req['userRole'] = User[index].role
        next()
    } else {
        res.json('JWT is invalid')
        res.status(401)
        return
    }
}

module.exports = authenMdw