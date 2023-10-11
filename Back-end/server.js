const express = require("express");
const chats = require("./data/data"); // exported chat from data folder
const app = express();
const dotenv = require('dotenv'); // exported from .env to secure port no.
dotenv.config(); // middleware of .env

app.get('/',(req,res)=>{
    res.send("API is running");  
})


app.get('/api/chat',(req,res)=>{
    res.status(200).send(chats)
})


app.get('/api/chat/:id',(req,res)=>{   // used this api to get specific chat 
    const singleChat = chats.find((c)=>c._id === req.params.id) //id matching using find
    res.send(singleChat);
    // console.log(req.params.id);
})

const PORT = process.env.PORT || 5500;
app.listen(5500,console.log(`Running on Port ${PORT}`));
 