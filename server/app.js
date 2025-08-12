require('dotenv').config()

const express= require('express')

const cors= require('cors')

const db= require('./db')

const bodyParser = require('body-parser')

const userRoute= require('./routes/usersApi')

const app= express()

app.use(bodyParser.json());

app.use(cors());

app.use('/api/user', userRoute)

//http://localhost:5000/api/user/adduser

const port= process.env.PORT 

app.get('/',(req, res)=>{
    res.send("hiii from suks")
})

app.listen(port,()=>{
console.log(`server running on : http://localhost:${port}`)
})