const express= require('express')

const router= express.Router()

const product = require('../models/product')

router.post('/addProduct', async(req,res)=>{

try{
  const newProduct= new product({
        product_name : req.body.product_name,
        product_price : req.body.product_price,
        product_description : req.body.product_description

    })

    const saveProduct= await newProduct.save()
    res.json(saveProduct)

}
catch(error ){
    res.status(500).json({'error':error})

}

})

w
module.exports= router