const express= require('express')
const app = express()
const PORT = 5000



const mongoose = require('mongoose')
const {DATA_BASE}= require('./keys')

mongoose.connect(DATA_BASE,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})

mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

require("./models/user")
require("./models/bureau")

app.use(express.json())
app.use(require('./routes/auth'))

app.get('/',(req,res)=>{
    res.send ('hello world')
}) 

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
