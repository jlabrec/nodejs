const express = require('express');


const router = express.Router();

//.use will match '/'+anything, .get/post will match exactly. 
router.use('/',(req,res,next)=>{
    // console.log('this always runs');
     next();
 })

router.get('/',(req,res,next)=>{
    // console.log('This is the next');
     //Send response
     res.setHeader('Content-Type','application/json');
     res.send({"message":"Hello from express json"});
     //res.send('<h1>Hello from Express</h1>');
 
 });
 

 module.exports = router; 