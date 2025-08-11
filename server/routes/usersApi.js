const express= require("express")

const router= express.router()

const User= require('../models/user')

router.post('/adduser', async(req,res)=>{

    try{
    const newUser= new user({
        user_name: req.body.user_name,
        user_password:req.body.user_password,
        user_email:req.body.user_email,
        gender:req.body.gender
    })
      
        const saveUser= await newUser.save()
        res.json(saveUser)

    }
    catch(error){
res.status(500).json({'error':error})
    }
  
})

module.exports= router