const mongoose = require('mongoose');

   mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
    const productSchema = new mongoose.Schema({
        mobile: String,
        brand: String,
        price: Number,
        color: String,
    });


    const saveInDb = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({
        brand: "imo",
        price: 9050,
        mobile: "imo",
        color: "blue",
        //  contry: "IND"
    })
    let result = await data.save()
    console.log(result);
}
// saveInDb()

const updateInDb = async () => {
    const product = mongoose.model('products', productSchema);
    let data = await product.updateOne(
        { price: 9050 },
        {
            $set: { brand: "momo" }
        }
    )
    console.log(data);
}
// updateInDb()

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({brand:"kop"})
    console.log(data);
}
// deleteInDB()

const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({mobile: "imo"})
    console.log(data);
}

findInDB()


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
}*/