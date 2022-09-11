const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("user")
const Bureau = mongoose.model("bureau")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../keys')



// 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

router.post('/signup', (req, res) => {
   const { nom, telephone, produit, lieu } = req.body
   if (!telephone || !produit || !nom) {
      return res.status(422).json("please add all the fields")
   }
   const user = new User({ nom, telephone, produit, lieu })
   user.save().then(user => {
      res.json("saved")
      console.log(user.body)
   }).catch(err => { console.log('error', err) })

})


router.post('/sajel', (req, res) => {
   const { nom, password } = req.body
   if (!nom || !password) {
      return res.status(422).json('saisir vos cordonnées')
   }
   Bureau.findOne({ nom: nom })
      .then((savedUser) => {
         if (savedUser) {
            return res.status(422).json({ message: "utilisateur existant" })

         }
         bcrypt.hash(password, 12).then(hashedpassword => {
            const bureau = new Bureau({ nom, password: hashedpassword })
            bureau.save().then(birou => { res.json('savved') })
         })

      }).catch(err => { console.log(err) })
})


router.post('/signin', (req, res) => {
   const { nom, password } = req.body
   if (!nom || !password) {
      return res.status(422).json('saisir vos cordonnées')
   }
   Bureau.findOne({ nom: nom }).then((existUser) => {
      if (existUser) {
         bcrypt.compare(password, existUser.password).then(match => {
            if (match) {
               const token = jwt.sign({ _id: existUser._id }, JWT_SECRET)
               //  transporter.sendMail({
               //    to:"ichrak.sliti@ensi-uma.tn",
               //    from:"nom",
               //   subject:"test",
               //    html:"<h6>saleem</h6>"
               //  })
               console.log('connected successfully')
               const { _id, nom, password } = existUser
               res.json({ token, bureau: { _id, nom, password } })

            }
         }).catch(err => { console.log(err) })

      }

   })

})

router.get('/materiaux', (req, res) => {
   User.find().then(mats => {
      res.json({ mats })
   }).catch(err => { console.log(err) })
})

router.get('/bureaux', (req, res) => {
   Bureau.find().then(bureau => {
      const birou = new Array();
      birou.push(bureau.map(item => { return [item.nom, item._id] }))
      res.json({ birou })
   }).catch(err => { console.log(err) })

})



router.delete('/deletemateriaux/:matID', (req, res) => {
   User.findOne({ _id: req.params.matID }).exec((err, user) => {
      if (err) {
         return res.status(422).json({ error: err })
      }
      if (user._id) {
         user.remove().then(resultat => { res.json('deleted') }).catch(err => { console.log(err) })

      }
   })
})



// .populate("sentBy","_id name")
module.exports = router