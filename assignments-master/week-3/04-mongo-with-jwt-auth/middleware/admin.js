const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config") //secret key for my jwtwebtoken
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const Token = req.headers.authorization;
    const words = Token.split(" ");//words=["Bearer", "ascasvasncjnasjincans"] I need second part here
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }
}

module.exports = adminMiddleware;