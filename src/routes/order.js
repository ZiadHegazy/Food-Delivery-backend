const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const jwt=require("jsonwebtoken");


router.get('/userOrders/:token', async (req, res) => {
    const token=req.params.token;
    try{
        const user=jwt.verify(token,"secret");
        const orders = await Order.find({ userId: user.id });
    res.json(orders);
    }catch{
        res.status(400).json({message:"Invalid token"});
    }
});

router.post('/placeOrder', async (req, res) => {
    const { token, items, total ,address} = req.body;
    const user=jwt.verify(token,"secret");
    const userId=user.id;
    const order = new Order({ userId, items, total,address });
    await order.save();
    await Cart.findOneAndUpdate({ userId }, { items: [] });
    res.json(order);
});
module.exports = router;