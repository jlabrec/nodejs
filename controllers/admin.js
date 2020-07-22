const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{

    res.render('admin/edit-product',{
           pageTitle:"Add Product",
           path: '/admin/add-product',
           editing: false
       });
};



exports.postAddProduct = (req,res,next)=>{
    const title = req.body.title; 
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const newProduct = new Product(null,title,imageUrl,description,price);
    newProduct.save();


    res.redirect('/');//convenience function express provides
};

exports.getEditProduct = (req,res,next)=>{
    const editMode = req.query.edit;
    if (!editMode) return res.redirect('/');
    const productId = req.params.productId;
    Product.findById(productId,product=>{

        if(!product){ 
            console.log("no product found");
            return res.redirect('/not-found');
        }
        console.log(product);


        res.render('admin/edit-product',{
            pageTitle:"Edit Product",
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    });
    
};

exports.postDeleteProduct = (req,res,next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId);
    res.redirect('/admin/products');
    
};

exports.postEditProduct = (req,res,next) => {
    const prodId = req.body.productId;
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const updatedProduct = new Product(prodId,title,imageUrl,description,price);
    console.log(updatedProduct);
    updatedProduct.save();
    res.redirect('/admin/products');
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