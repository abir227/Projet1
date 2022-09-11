const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    comments:[{
        text:String,
        postedBy:String
    }],
   
})
// password:gfdcvs8z0&

mongoose.model("siége",userSchema)
