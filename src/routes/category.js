const express=require("express")
const router=express.Router();
const Category=require("../models/Category")
const Product=require("../models/Product")
router.get("/allCategories",async (req,res)=>{
    const categories=await Category.find({});
    res.json(categories);
})

router.post("/addCategory",async (req,res)=>{
    const {name}=req.body;
    const existingCategory=await Category.find({name});
    if(existingCategory.length>0){
        res.status(400).json({message:"Category already exists"})
        return;
    }
    const category=new Category({name});
    await category.save();
    
});

router.get("/getCategoryProducts/:id",async (req,res)=>{
    const categoryId=req.params.id;
    const category=await Category.findById(categoryId);
    const products=await Product.find({_id:{$in:category.productList}});
    res.json(products);
});

module.exports = router;