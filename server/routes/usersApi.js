const bcrypt= require('bcryptjs')

const express= require("express")

const router= express.Router()

const User= require('../models/user')

router.post('/adduser',async(req,res)=>{

    try{
    const newUser= new User({
        user_name : req.body.user_name,
        //more salt means more secured
        user_password :bcrypt.hashSync(req.body.user_password,10),
        user_email : req.body.user_email,
        gender : req.body.gender
    })
      
        const saveUser= await newUser.save()
        res.json(saveUser)

    }
    catch(error){
res.status(500).json({'error':error})
    }
  
})

//http://localhost:5000/api/User/viewuser

router.get('/viewUser',async(req,res)=>{
    try {
        const users= await User.find()
        res.json(users)
        
    } catch (error) {
        res.status(5000).json({'error':error})
    }
})

router.get('/viewSingleUser/:userid', async(req,res)=>{

    const uid = req.params.userid

    try {
    const users= await User.findById(uid)
    res.json(users)
    
} catch (error) {
    res.status(5000).json({'error':error})
}
})

module.exports= router