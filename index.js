const express = require("express"); //function
const app = express(); //object

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening on port:${port}`);
});

app.get('/',(req,res)=>{
    res.send('you contacted root path');
});

app.get('/apple',(req,res)=>{
    res.send('you contacted apple path.');
});

app.get('/orange',(req,res)=>{
    res.send('you contacted orange path');
});

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send(`You have connected to @${username}`);
});

// app.get("*",(req,res)=>{
//     res.send('This path does not exist');
// });

app.post("/",(req,res)=>{
    console.log('received post');
    res.send('you send a post request');
});

app.all('*',(req,res)=>{
    res.status(404).send('This path does not exists');
});


// app.use((req,res)=>{
//     // console.log(req);
//     console.log('request received');
//     let code = "<h1>Hii Iam a mango</h1> <ul><li>My color is Yellow</li> <li> location India </li> </ul>"
//     // res.send('This is basic response');
//     res.send(code);
// })