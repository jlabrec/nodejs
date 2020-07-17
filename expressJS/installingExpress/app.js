
//const http = require('http'); not necessary since express is handling this so far. 
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

//Parse the body of the request and call next routing function, will parse form type data. 
app.use(bodyParser.urlencoded({extended: false}));


app.use('/',(req,res,next)=>{
   // console.log('this always runs');
    next();
})

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST">Product:<input type="text" name="title"><br><button type="submit">Add Product</button></form>');
})




app.use('/product',(req,res,next)=>{

    console.log(req.body); //convenience function express provides
    console.log(req.body.title);
    res.redirect('/');//convenience function express provides
});

app.use('/',(req,res,next)=>{
   // console.log('This is the next');
    //Send response
    res.setHeader('Content-Type','application/json');
    res.send({"message":"Hello from express json"});
    //res.send('<h1>Hello from Express</h1>');

});



// app.listen(3000) replaces this
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);