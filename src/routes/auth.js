const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt=require("jsonwebtoken");
router.post('/register', async (req, res) => {
    const { username, password, address, phone } = req.body;
    const existingUser =await User.find({username:username});
    if(existingUser.length>0){
        res.status(400).json({message:"User already exists"})
        return;
    }

    const user = new User({ username, password, address, phone });
    await user.save();
    const token=jwt.sign({id:user._id,username:username,password:password},"secret");
    res.json({ message: 'User registered successfully' ,token:token});
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.find({ username, password });
    if(user.length==0){
        res.status(400).json({message:"User not found"})
        return;
    }else{
        const token=jwt.sign({id:user[0]._id,username:username,password:password},"secret");
        res.json({ message: 'User logged in successfully',token:token });
    }
});
module.exports = router;