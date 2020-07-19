const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

let products = [];






router.get('/add-product',(req,res,next)=>{
    
     res.render('add-product',{
            docTitle:"Add Product", 
            activeAddProduct: true, 
            formsCSS:true,
            productCSS:true,
            path: '/admin/add-product'
        });
})



//Will only match post requests
router.post('/add-product',(req,res,next)=>{

    
    products.push({title: req.body.title});
    
    res.redirect('/');//convenience function express provides
});

exports.routes = router; 
exports.products = products;