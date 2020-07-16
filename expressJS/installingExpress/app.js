
//const http = require('http'); not necessary since express is handling this so far. 
const express = require('express');


const app = express();

app.use('/',(req,res,next)=>{
    console.log('this always runs');
    next();
})

app.use('/add-product',(req,res,next)=>{
    res.send('<h1>Product added :100:</h1>');
})

app.use('/',(req,res,next)=>{
    console.log('This is the next');
    //Send response
    res.setHeader('Content-Type','application/json');
    res.send({"message":"Hello from express json"});
    //res.send('<h1>Hello from Express</h1>');

});



// app.listen(3000) replaces this
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);