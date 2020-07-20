const products = [];

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save() {
        products.push(this);
        products.sort((a,that)=>(a.title.toUpperCase()< that.title.toUpperCase())? -1:1);
    }

    static fetchAll(){
        return products;
    }

}