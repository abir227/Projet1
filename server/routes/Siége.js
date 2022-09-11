const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Siege=mongoose.model('siége')

// router.post('/addsiege',(req,res)=>{
//   const{nom,password}=req.body
//   if (!nom || !password) {
//     return res.status(422).json('saisir vos cordonnées')
//  }
//  const siege = new Siege({nom:nom,password:password})
//  siege.save().then(s=>{res.json('saved')})

// })

router.post('/connect',(req,res)=>{
    const {password}=req.body
    if(!password){
        return res.status(422).json('saisir le code')
    }
    Siege.find({password:password}).then(result=>{
        res.json('connected')
    })
})
router.post('/sendMessage',(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.body.postedBy
    }
    
    Siege.updateOne({},{
        $push:{comments:comment}
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })

})

router.get('/myMessages',(req,res)=>{
   Siege.find().then(siege=>{
    const messages=new Array();
    messages.push(siege[0].comments)
    res.json(messages)
   })
})
module.exports = router