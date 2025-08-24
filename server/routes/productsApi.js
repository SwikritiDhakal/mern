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
//

router.get('/viewProduct',async(req,res)=>{

    try {
        const products= await product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({'error':error})
    }


})

router.get('/viewSingleProduct/:product_id',async(req,res)=>{
    const pid= req.params.product_id

    try {
        const products= await product.findById(pid)
        res.json(products)
        
    } catch (error) {
        res.status(500).json({'error':error})
    }

})

router.put('/updateProduct/:product_id',async(req,res)=>{

    const pid= req.params.product_id

    try {
        const products= await product.findByIdAndUpdate(
         pid,
        {$set:req.body},
        {new:true}
        )
        res.json(products)

        
    } catch (error) {
      res.status(500).json({'error':error})  
    }
})


module.exports= router