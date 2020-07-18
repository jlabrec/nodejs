const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();




module.exports = router;

router.get('/add-product',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})



//Will only match post requests
router.post('/add-product',(req,res,next)=>{

    console.log(req.body); //convenience function express provides
    console.log(req.body.title);
    res.redirect('/');//convenience function express provides
});