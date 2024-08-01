const mongoose=require("mongoose")
const Schema= new mongoose.Schema({
    userId:{
        type:String,
    },
    items:{
        type:[{productId:String,quantity:Number,price:Number,image:String}],
        default:[]
    },
    status:{
        type:String,
        default:"pending"
    },
    total:{
        type:Number
    },
    address:{
        type:String
    },
})
const Order=mongoose.model("Order",Schema);
module.exports=Order;