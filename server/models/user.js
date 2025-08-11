const mongoose= require('mongooose')

const userSchema= new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    user_password:{
        type:String,
        required:true
    },
    user_email:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        enum:['male','female'],
        default:"female"

    }


})

module.exports= mongoose.model('mvs_users', userSchema)