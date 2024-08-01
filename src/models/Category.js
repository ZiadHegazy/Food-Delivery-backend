const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    productList:{
        type: [String],
        default: []
    }

});
const Category = mongoose.model("Category", Schema);
module.exports = Category;