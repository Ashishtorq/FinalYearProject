const express = require("express");
const chats = require("./data/data");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/',(req,res)=>{
    res.send("API is running");
})


app.get('/api/chat',(req,res)=>{
    res.status(200).send(chats)
})


app.get('/api/chat/:id',(req,res)=>{
    const singleChat = chats.find((c)=>c._id === req.params.id)
    res.send(singleChat);
    // console.log(req.params.id);
})

const PORT = process.env.PORT || 5500;
app.listen(5500,console.log(`Running on Port ${PORT}`));
 