
//const http = require('http'); not necessary since express is handling this so far. 
const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');


const app = express();

//Parse the body of the request and call next routing function, will parse form type data. 
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRouter);
app.use(shopRouter);









//add 404 page for if no routes matched
app.use((req,res,next)=>{
    res.status(404).send('<h1>404 error: Page not found<h1>');

});


// app.listen(3000) replaces this
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);