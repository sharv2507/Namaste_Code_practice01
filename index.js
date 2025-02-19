const express = require('express');

const app = express();

app.get('/',(req, res) =>{
    res.send(`This is not a mistake...`);
})

app.get('/user',(req, res) =>{
    res.send(`This is not a mistake...`);
})

app.get('/man-made',(req, res) =>{
    res.send(`This is not a mistake...`);
})

app.listen(3038, ()=>{
    console.log("App is listening");
})