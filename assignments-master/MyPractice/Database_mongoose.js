//practicing mongoose
const express = require('express')
const app = express();
const mongoose = require('mongoose');
app.use(express.json())

mongoose.connect('mongodb+srv://adarshshankar:triffycodes%402097@cluster0.frjqtav.mongodb.net/User_app')

const User = mongoose.model('users', { name: String, username: String, password: String });

app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existedUser = await User.findOne({username: username});

    if(existedUser){
        return res.status(400).send("Username already existed")
    }

    const user = new User({ 
        name: name, 
        username: username, 
        password: password 
    });

    user.save();
    res.json({
        "msg": "User created successfully"
    })

});
app.listen(3000);
