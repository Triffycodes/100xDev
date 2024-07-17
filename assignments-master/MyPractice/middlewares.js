const express = require("express");
const app = express();

function middleware1(req,res,next){
    console.log("Hi Adarsh from middleware1");
    next();
}

app.get("/health-checkup",middleware1, function (req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "Adarsh" || password != "pass"){
        res.status(400).json({"msg" : "Invalid inputs" + username})
        return
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg" : "Invalid kidneyId"})
        return
    }

    

    res.json({
        msg: "You are healthy"
    })
});

app.listen(3000);
