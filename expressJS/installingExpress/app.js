const http = require('http');
const express = require('express');


const app = express();

app.use((req,res,next)=>{
    console.log('In the middleware!');
    //call next() to call the next use middleware function
    next();
});

app.use((req,res,next)=>{
    console.log('This is the next');
    //Send response
    //res.setHeader('Content-Type','application/json');
    //res.send('{"message":"Hello from express json"}');
    res.send('<h1>Hello from Express</h1>');

});
const server = http.createServer(app);

server.listen(3000);