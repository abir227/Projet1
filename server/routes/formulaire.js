const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Benevole = mongoose.model("benevole")



router.post('/form',(req,res)=>{
    const {nom,prenom,email,numtel} =req.body
    if(!nom || !prenom || !email || !numtel){
       return res.status(422).json({error:"please add all the fields"})
    }
    const benevole= new Benevole({nom,prenom,email,numtel})
    benevole.save().then(benevole=>{res.json({message:'saved'})
  console.log(benevole.body)}).catch(err=>{console.log('error',err)})
})
module.exports = router