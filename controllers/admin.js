const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{

    res.render('admin/add-product',{
           pageTitle:"Add Product",
           activeAddProduct: true,
           formsCSS:true,
           productCSS:true,
           path: '/admin/add-product'
       });
};


exports.postAddProduct = (req,res,next)=>{
    const title = req.body.title; 
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const newProduct = new Product(title,imageUrl,description,price);
    newProduct.save();


    res.redirect('/');//convenience function express provides
};


exports.getProducts = (req,res,next) => {
    Product.fetchAll((products) => {
        res.render('admin/product-list',{
            prods: products,
            pageTitle: "Admin Products",
            path: "/admin/products",
            hasProducts: products.length>0
        });
    });
}