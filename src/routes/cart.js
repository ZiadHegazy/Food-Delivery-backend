const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const jwt=require("jsonwebtoken");
router.get('/userCart/:token', async (req, res) => {
    const token=req.params.token;
    try{
        const user=jwt.verify(token,"secret");
        const cart = await Cart.find({ userId: user.id });
    if(cart.length==0){
        const newCart=new Cart({userId:user.id,items:[]});
        newCart.save();
        res.json(newCart);
    }else{
        res.json(cart[0]);
    }
    }catch{
        res.status(400).json({message:"Invalid token"});
        
    }
    

});

router.post('/addToCart', async (req, res) => {
    const { token, productId, quantity, price, image,name } = req.body;
    const user=jwt.verify(token,"secret");
    const userId=user.id;
    const cart = await Cart.find({ userId });
    if(cart.length==0){
        const newCart=new Cart({userId,items:[{productId,name,quantity,price,image}]});
        newCart.save();
        res.json(newCart);
    }else{
        const existingItem = cart[0].items.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += Number(quantity);
        } else {
            cart[0].items.push({ productId, name, quantity: Number(quantity), price: Number(price), image });
        }
        const newCart = await cart[0].save();
        res.json(newCart);
    }
});

router.post('/removeFromCart', async (req, res) => {
    const { token, productId } = req.body;
    const user=jwt.verify(token,"secret");
    const userId=user.id;
    const cart = await Cart.findOneAndUpdate({ userId }, { $pull: { items: { productId } } }, { new: true });
    res.json(cart);
});

router.post('/updateItemQuantity', async (req, res) => {
    const { token, productId, quantity } = req.body;
    const user=jwt.verify(token,"secret");
    const userId=user.id;
    const cart = await Cart.findOneAndUpdate({ userId, "items.productId": productId }, { $set: { "items.$.quantity": quantity } }, { new: true });
    res.json(cart);
});

module.exports = router;