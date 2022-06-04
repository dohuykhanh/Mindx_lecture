function LoggingMiddleWare (req, res, next) {
    console.log('New request at', new Date())
    next()
}

module.exports = LoggingMiddleWare