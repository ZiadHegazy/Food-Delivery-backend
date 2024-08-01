const mongoose=require("mongoose")
const Schema=new mongoose.Schema({
    userId:{
        type:String,
        
    },
    items:{
        type:[{productId:String,name:String,quantity:Number,price:Number,image:String}],
        default:[]
    }
})
const Cart=mongoose.model("Cart",Schema);
module.exports=Cart;