const express = require('express')

const router= express.Router()

const product= require('../models/product')

router.post('./addProduct', async(req,res)=>{

    const newProduct= new product({
        product_name : req.body.product_name,
        product_description: req.body.product_description,
        product_price: req.body.product_price
    })
    const saveProduct= await newProduct.save()
    res.json(saveProduct)

    //http://localhost:5000/api/product/newProduct

})

