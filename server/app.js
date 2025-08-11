const express= require('express')

const cors= require('cors')

const db= require('./db')

const bodyParser = require('body-parser')

const userRoute= require('./routes/usersApi')

const app= express()

app.use(bodyParser.json());

app.use(cors());

app.use("./api/user", userRoute)

const port= process.env.PORT || 5000

app.get('/',(req, res)=>{
    res.send("hiii from suks")
})

app.listen(port,()=>{
console.log(`server running on : http://localhost:${port}`)
})