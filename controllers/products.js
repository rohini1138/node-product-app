const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const ProductModel = require("../model/product.model");
router.get("/add", (req,res)=>{
    res.render("add-product")
});
router.post("/add", (req,res)=>{
    res.render("add-product");
    var product = new ProductModel();
    product.productName = req.body.productName;
    product.productPrice = req.body.productPrice;
    product.productRating = req.body.productRating;
    product.productId = Math.ceil(Math.random()*10000000)+"";
    product.save((err,doc)=>{
        if(!err){
            res.redirect("/product/list")
        }
        else{
            res.send("Error occured");
        }
    });
})
router.get("/list",(req,res)=>{
    ProductModel.find((err,docs)=>{
        if(!err)
        {
            const products = {
                userDocuments: docs.map(document =>{
                    return {
                        productId: document.productId,
                        productName: document.productName
                    }
                })
            }
            console.log(products);
            res.render("list", {userDocuments: products.userDocuments})           
        }
    })    
});
module.exports = router;