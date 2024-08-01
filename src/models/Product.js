const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    image: {
        type: String,
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
});
const Product = mongoose.model("Product", Schema);
module.exports = Product;