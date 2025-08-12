require('dotenv').config()

const mongoose = require("mongoose");

const dburi= process.env.DB_URI

mongoose.connect(dburi)

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})

mongoose.connection.on("error",()=>{
    console.log("error connecting to mongodb")
})

module.exports= mongoose

