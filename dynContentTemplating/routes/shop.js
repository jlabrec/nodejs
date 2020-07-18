const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

//.use will match '/'+anything, .get/post will match exactly. 
router.use('/',(req,res,next)=>{
    // console.log('this always runs');
     next();
 })

router.get('/',(req,res,next)=>{

    console.log(adminData.products)
    // console.log('This is the next');
     //Send response
     //res.setHeader('Content-Type','application/json');
     //res.send({"message":"Hello from express json"});
     //res.send('<h1>Hello from Express</h1>');
    //  res.sendFile(path.join(__dirname,'..','views','shop.html'));
    //res.sendFile(path.join(rootDir,'views','shop.html'));

    /**
     * Pug response: 
     * we dont need to supply the path to shop.pug, because it was set in app.js
     */
    const products = adminData.products;

    res.render('shop',{prods: products, docTitle: "Shop"});
 
 });
 

 module.exports = router; 