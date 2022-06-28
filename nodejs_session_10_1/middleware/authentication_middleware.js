const jwt = require("jsonwebtoken");
const jwtKey = require("../constants/key");
const { db } = require("../db");

async function authenticationMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, jwtKey);
    if (decoded) {
      const user = await db.users.findOne({
        Name: decoded.username,
        Password: decoded.password,
      });

      // _id ==> Object id mongodb generate
      // ID Auto increment (1, 2 ,3, 4, 5)
      req["userID"] = user["_id"];
      req["reportId"] = user["reportId"];
      req["role"] = user["role"];
      next();
    }
  } catch (error) {
    res.status(401);
    console.log(error.message);
    res.json("User is not existed");
    return
  }
}

module.exports = authenticationMiddleware;
