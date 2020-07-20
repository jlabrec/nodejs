const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    
    res.render('add-product',{
           pageTitle:"Add Product", 
           activeAddProduct: true, 
           formsCSS:true,
           productCSS:true,
           path: '/admin/add-product'
       });
};


exports.postAddProduct = (req,res,next)=>{

    const newProduct = new Product(req.body.title);
    newProduct.save();
    
    
    res.redirect('/');//convenience function express provides
};

exports.getProducts = (req,res,next)=>{

    Product.fetchAll((products) => {
        res.render('shop',{
            prods: products,
            pageTitle: "Shop",
            path: "/",hasProducts: products.length>0,
            activeShop: true,
            productCSS: true
        });
    });
    
    
    
 
 };