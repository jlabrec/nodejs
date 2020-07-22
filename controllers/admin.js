const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{

    res.render('admin/edit-product',{
           pageTitle:"Add Product",
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

exports.getEditProduct = (req,res,next)=>{
    const editMode = req.query.edit;
    if (!editMode) return res.redirect('/');
    res.render('admin/edit-product',{
           pageTitle:"Edit Product",
           path: '/admin/edit-product',
           editing: editMode
       });
};


exports.getProducts = (req,res,next) => {
    Product.fetchAll((products) => {
        res.render('admin/products',{
            prods: products,
            pageTitle: "Admin Products",
            path: "/admin/products",
            hasProducts: products.length>0
        });
    });
}