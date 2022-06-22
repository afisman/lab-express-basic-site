const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    discountPercentage: {
        type: Number
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    stock: {
        type: Number
    },
    brand: {
        type: String,
        set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    category: {
        type: String
    },
    thumbnail: {
        type: String
    },
    images: {
        type: [String]
    }

})


const Product = mongoose.model('Product', productSchema);

module.exports = Product;