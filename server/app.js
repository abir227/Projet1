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
require("./models/formulaire")
require("./models/formulaire2")
require("./models/siége")

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/formulaire'))
app.use(require('./routes/formulaire2'))
app.use(require('./routes/Siége'))

app.get('/',(req,res)=>{
    res.send ('hello world')
}) 

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
