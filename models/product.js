const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');
const p = path.join(rootDir,'data','products.json');

const getProductsFromFile=(callBack) => {
    fs.readFile(p,(err,data)=>{
        if(err) {
            callBack([]);
        } else{
        callBack(JSON.parse(data).sort((a,that)=> (a.title.toLowerCase() < that.title.toLowerCase()) ? -1 : 1));
        }
    });

};


module.exports = class Product{
    constructor(id,title, imageUrl, description, price){
        this.id = id; 
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {

        getProductsFromFile(products =>{
            if(this.id) {
                const existingProdIndex = products.findIndex(prod => prod.id == this.id);
                console.log(existingProdIndex);
                const updatedProds = [...products];
                updatedProds[existingProdIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProds),(err)=>{
                    if(err)
                    console.log(err);
                });
                
            } else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products),(err)=>{
                    if(err)
                    console.log(err);
                });
            }
            
        });
        
        
        
        
    }

    static fetchAll(callBack){
         getProductsFromFile(callBack);
        
    }

    static findById(id,cb){
        
        getProductsFromFile(products=>{
            const product = products.find(prod => prod.id === id);
            cb(product);
        });
    }

}