const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

let products = [];






router.get('/add-product',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
    /**
     * Pug templating:
     */
     //res.render('add-product',{docTitle:"Add Product", path: "/admin/add-product"});

     /**
      * HandleBars Templating:
      */
     res.render('add-product',{
            docTitle:"Add Product", 
            activeAddProduct: true, 
            formsCSS:true,
            productCSS:true
        });
})



//Will only match post requests
router.post('/add-product',(req,res,next)=>{

    //console.log(req.body); //convenience function express provides
    //console.log(req.body.title);
    products.push({title: req.body.title});
    products.sort((a,that)=>(a.title.toUpperCase() < that.title.toUpperCase)? 1 : -1);
    res.redirect('/');//convenience function express provides
});

exports.routes = router; 
exports.products = products;