const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),'data','cart.json');

module.exports = class Cart{
    static addProduct(id, price){
        //fetch previous cart
        
        fs.readFile(p,(err,fileContent)=>{
            let cart = {products: [],totalPrice: 0};
            if(!err){
                cart = JSON.parse(fileContent);
            }
            //analyze cart
            const existingProductIndex = cart.products.findIndex(prod=>prod.id ===id);
            const existingProduct = cart.products[existingProductIndex]
            //add or increment the product count
            let updatedProduct;
            if(existingProduct){
                
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty+1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;

            } else {
                updatedProduct = {id:id,qty:1};
                cart.products = [...cart.products,updatedProduct];
            }

            cart.totalPrice = cart.totalPrice + +price;

            //save back to file
            fs.writeFile(p,JSON.stringify(cart,null,4),err=>{console.log(err)});
        });
        
    }


    static deleteProduct(id,productPrice) {
        fs.readFile(p,(err,fileContent)=>{
            if(err) return;
            
            const cart = JSON.parse(fileContent);
            const updatedCart = {...cart};
            const product = updatedCart.products.find(prod => prod.id === id);
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * product.qty;

            fs.writeFile(p,JSON.stringify(updatedCart,null,4),err=>{
                if(err) console.log(err);
            });
        });
    }
    


}