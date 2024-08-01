const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Product = require('../models/Product');

router.get("/searchProducts", async (req, res) => {
    const { search } = req.body;
    const products = await Product.find({ $or: [{ category: search }, { $includes: { name:search} }] });
    res.json(products);
});

router.post("/addProduct", async (req, res) => {
    const { name, price, image, category, description } = req.body;
    const existingProduct = await Product.find({ name, category });
    if (existingProduct.length > 0) {
        res.status(400).json({ message: "Product already exists" });
        return;
    }
    const product = new Product({ name, price, image, category, description });
    await product.save();
    const categoryObj = await Category.find({ name: category });
    if (categoryObj.length > 0) {
        await Category.findOneAndUpdate({ name: category }, { $push: { productList: product._id } });
    }
    res.json({ message: 'Product added successfully' });
});

module.exports = router;