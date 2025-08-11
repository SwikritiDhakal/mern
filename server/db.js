const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://swikritid86:swikritipp@cluster0.iswqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})

mongoose.connection.on("error",()=>{
    console.log("error connecting to mongodb")
})

module.exports= mongoose

