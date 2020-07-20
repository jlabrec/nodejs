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
    constructor(title){
        this.title = title;
    }

    save() {
        
        getProductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err)=>{
                if(err)
                console.log(err);
            });
        });
        
        
        
        
    }

    static fetchAll(callBack){
         getProductsFromFile(callBack);
        
    }

}