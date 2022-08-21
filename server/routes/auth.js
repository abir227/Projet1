const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("user")
const Bureau=mongoose.model("bureau")
//const crypto = require('crypto')
//const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const {JWT_SECRET} = require('../config/keys')
// const requireLogin = require('../middleware/requireLogin')
// const nodemailer = require('nodemailer')
// const sendgridTransport = require('nodemailer-sendgrid-transport')
// const {SENDGRID_API,EMAIL} = require('../config/keys')
//


// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth:{
//         api_key:SENDGRID_API
//     }
// }))

router.post('/signup',(req,res)=>{
  const {nom,telephone,produit,lieu} =req.body
  if(!telephone || !produit || !nom){
     return res.status(422).json({error:"please add all the fields"})
  }
  const user= new User({nom,telephone,produit,lieu})
  user.save().then(user=>{res.json({message:'saved'})
console.log(user.body)}).catch(err=>{console.log('error',err)})

 })
//   User.findOne({telephone:telephone})
//   .then((savedUser)=>{
//       if(savedUser){
//         return res.status(422).json({error:"user already exists with that telephone"})
//       }
//       bcrypt.hashdproduit=>{
//             const user = new User({
//                 tel(produit,12)
//       .then(hasheephone,
//                 produit:hashedproduit,
//                 nom,
//                 lieu
//             })
    
            //.then(user=>{
                // transporter.sendMail({
                //     to:user.telephone,
                //     from:"no-reply@insta.com",
                //     subject:"signup success",
                //     html:"<h1>welcome to instagram</h1>"
                // })
               // res.json({message:"saved successfully"})
            //})
            //.catch(err=>{
               // console.log(err)
           // })
     // })
     
 
  //.catch(err=>{
  //  console.log(err)
 // })
//})


// router.post('/signin',(req,res)=>{
//     const {email,produit} = req.body
//     if(!email || !produit){
//        return res.status(422).json({error:"please add email or produit"})
//     }
//     User.findOne({email:email})
//     .then(savedUser=>{
//         if(!savedUser){
//            return res.status(422).json({error:"Invalid Email or produit"})
//         }
//         bcrypt.compare(produit,savedUser.produit)
//         .then(doMatch=>{
//             if(doMatch){
//                 // res.json({message:"successfully signed in"})
//                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
//                const {_id,nom,email,followers,following,lieu} = savedUser
//                res.json({token,user:{_id,nom,email,followers,following,lieu}})
//             }
//             else{
//                 return res.status(422).json({error:"Invalid Email or produit"})
//             }
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     })
// })


// router.post('/reset-password',(req,res)=>{
//      crypto.randomBytes(32,(err,buffer)=>{
//          if(err){
//              console.log(err)
//          }
//          const token = buffer.toString("hex")
//          User.findOne({email:req.body.email})
//          .then(user=>{
//              if(!user){
//                  return res.status(422).json({error:"User dont exists with that email"})
//              }
//              user.resetToken = token
//              user.expireToken = Date.now() + 3600000
//              user.save().then((result)=>{
//                  transporter.sendMail({
//                      to:user.email,
//                      from:"no-replay@insta.com",
//                      subject:"password reset",
//                      html:`
//                      <p>You requested for password reset</p>
//                      <h5>click in this <a href="${EMAIL}/reset/${token}">link</a> to reset password</h5>
//                      `
//                  })
//                  res.json({message:"check your email"})
//              })

//          })
//      })
// })


// router.post('/new-password',(req,res)=>{
//     const newPassword = req.body.password
//     const sentToken = req.body.token
//     User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
//     .then(user=>{
//         if(!user){
//             return res.status(422).json({error:"Try again session expired"})
//         }
//         bcrypt.hash(newPassword,12).then(hashedpassword=>{
//            user.password = hashedpassword
//            user.resetToken = undefined
//            user.expireToken = undefined
//            user.save().then((saveduser)=>{
//                res.json({message:"password updated success"})
//            })
//         })
//     }).catch(err=>{
//         console.log(err)
//     })
// })

router.post('/sajel',(req,res)=>{
   const {nom,password} = req.body
   if (!nom || !password) {
      return res.status(422).json('saisir vos cordonnées')
  }
  Bureau.findOne({ nom: nom })
  .then((savedUser) => {
      if (savedUser) {
          return res.status(422).json({ message: "utilisateur existant" })
          
      }
      const bureau= new Bureau({nom,password})
      bureau.save().then(birou=>{res.json('savved')})
})
})

 router.post('/signin',(req,res)=>{
   const {nom,password} = req.body
   if (!nom || !password) {
      return res.status(422).json('saisir vos cordonnées')
  }
  Bureau.findOne({nom: nom}).then((existUser)=>{
   if (existUser){
      console.log('connected successfully')
      const {_id,nom,password}=existUser
      res.json({bureau:{_id,nom,password}})
   }

  })

 })

 router.get('/materiaux',(req,res)=>{
   User.find().then(mats=>{res.json({mats})
console.log(mats)})
 })

module.exports = router