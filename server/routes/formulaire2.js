const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Membre = mongoose.model("membre")



router.post('/form2',(req,res)=>{
    const {nom,prenom,email,numtel,branche} =req.body
    if(!nom || !prenom || !email || !numtel || !branche){
       return res.status(422).json({error:"please add all the fields"})
    }
    const membre= new Membre({nom,prenom,email,numtel,branche})
    membre.save().then(membre=>{res.json({message:'saved'})
  console.log(membre.body)}).catch(err=>{console.log('error',err)})
})
module.exports = router