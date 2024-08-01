const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
   

});
const User = mongoose.model("User", Schema);
module.exports = User;