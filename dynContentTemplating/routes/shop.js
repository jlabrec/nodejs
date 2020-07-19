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

    const products = adminData.products;
    products.sort((a,that)=>(a.title.toUpperCase()< that.title.toUpperCase())? -1:1);
    
    res.render('shop',{
        prods: products,
        docTitle: "Shop",
        path: "/",hasProducts: products.length>0,
        activeShop: true,
        productCSS: true
    });
 
 });
 

 module.exports = router; 