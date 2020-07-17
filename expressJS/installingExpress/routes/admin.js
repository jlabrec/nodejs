const express = require('express');


const router = express.Router();



module.exports = router;

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST">Product:<input type="text" name="title"><br><button type="submit">Add Product</button></form>');
})



//Will only match post requests
router.post('/product',(req,res,next)=>{

    console.log(req.body); //convenience function express provides
    console.log(req.body.title);
    res.redirect('/');//convenience function express provides
});