const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`app is listening from ${port}`);
});

// app.get("/",(req,res)=>{
//     res.send("You have connected to root");
// });

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    let {username, id} = req.params;
    res.send(`Welcome to the page of @${username}`);
});

// app.get("/search",(req,res)=>{
//     console.log(req.query);
// });

app.get("/search",(req,res)=>{
    let {q} = req.query;
    console.log(q);
    if(!q){
        res.send('Nothing Searched');
    }
    res.send(`You have searched for ${q}`);
});