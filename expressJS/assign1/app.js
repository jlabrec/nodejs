const express = require('express');

const app = express();


//Assignment 1 Part 2
// app.use((req,res,next)=>{
//     console.log('this is going to show evertime');
//     next();
// });

// app.use((req,res,next)=>{
//     console.log('this will also show everytime');
//     res.statusCode=200;
//     res.send({'message':'success'});
// })


//Assignment 1 part 3
app.use('/users',(req,res,next)=>{
    res.send('<h1>Users Page</h1>');
});

app.use((req,res,next)=>{
    res.send('<h1>Home Page</h1>');
});







app.listen(3000);