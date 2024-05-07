const mongoose = require('mongoose');

const main = async () =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
    const productSchema= new mongoose.Schema({
       brand : String,
       price: Number
    });
    const productModel = mongoose.model('products',productSchema);
    let data = new productModel({brand:"imo", price:9050})
    let result = await data.save()
    console.log(result);
}
main()

/*
{
  "name": "39-mongooes-in-nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "imtiyaz",
  "license": "ISC",
  "dependencies": {
    "mongoose": "^8.2.1"
  }
}
 */