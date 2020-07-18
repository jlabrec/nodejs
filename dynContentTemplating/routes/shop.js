const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

//.use will match '/'+anything, .get/post will match exactly. 
router.use('/',(req,res,next)=>{
    // console.log('this always runs');
     next();
 })

router.get('/',(req,res,next)=>{
    // console.log('This is the next');
     //Send response
     //res.setHeader('Content-Type','application/json');
     //res.send({"message":"Hello from express json"});
     //res.send('<h1>Hello from Express</h1>');
    //  res.sendFile(path.join(__dirname,'..','views','shop.html'));
    res.sendFile(path.join(rootDir,'views','shop.html'));
 
 });
 

 module.exports = router; 