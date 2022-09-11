const mongoose = require('mongoose')
//const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
  
    prenom:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    numtel:{
        type:String,
        required:true
    }
   
})

mongoose.model("benevole",userSchema)