const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
  const productSchema = new mongoose.Schema({
    brand: String,
    price: Number,
  });
  const productModel = mongoose.model("productsTesting", productSchema);
  let data = new productModel({ brand: "imo", price: 9050 });
  let result = await data.save();
  console.log(result);
};
main();

//  mongodb officel packeg hai  mongoose nahi hai mongoose main bhut jasata faslites hai jise schemas deffined kar sakta hai
// koi bhi filed par number ya string check lage skta hai ya sab mongodb nahi karta hai

/* what is deffrent Schema and model 
mongodb mai jitan fild hota hai usko Schema bolata hai 
model ka kaam hai un schema ko used kar ke nodejs aur mongodb ko connect karta hai 
*/

/*
{s
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

/*
old  vision 
 "dependencies": {
    "express": "^4.17.1",
    "mongodb": "^3.6.10",
    "mongoose": "^5.11.15"
  }
*/
