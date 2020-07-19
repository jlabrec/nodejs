const products = [];

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

    
    products.push({title: req.body.title});
    
    res.redirect('/');//convenience function express provides
};

exports.getProducts = (req,res,next)=>{

    
    products.sort((a,that)=>(a.title.toUpperCase()< that.title.toUpperCase())? -1:1);
    
    res.render('shop',{
        prods: products,
        pageTitle: "Shop",
        path: "/",hasProducts: products.length>0,
        activeShop: true,
        productCSS: true
    });
 
 };