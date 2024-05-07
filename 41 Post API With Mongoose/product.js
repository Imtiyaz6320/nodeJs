const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    mobile: String,
    brand: String,
    price: Number,
    color: String,
});

module.exports = mongoose.model('products', productSchema)