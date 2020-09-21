const express = require('express');
const Users = require('../../modules/User');
const router = express.Router();
//const User = ('../../models/User');
const bcrypt = require('bcryptjs');
router.get('/test', (req,res) => res.json({msg: "Users Works!!"}));


//Loadinput Validation

const validateRegisterInput = require('../../validation/register')


//post -- api/users/register
//access public

router.post('/register',(req,res) => {
  const{ errors, isValid }= validateRegisterInput(req.body);
  //check validation
   if(!isValid){
       return res.status(400).json(errors);
   }
   
    Users.findOne({ username:req.body.username})
    .then(user => {
        if(user) {
            return res.status(400).json({username: 'user already exists'});
        }else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
        bcrypt.genSalt(10,(err,salt) => {
            bcrypt.hash(newUser.password,salt,(err,hash) => {
                if(err) throw  err;
                newUser.password = hash;
                newUser.save().then(user => res.json(user))
                .catch(err => console.log(err));
            })
        })
        }
    })
});

//get -- api/users/register
//access public

router.post('/login',(req,res) => {

  const username = req.body.username;
  const password = req.body.password;

  //find user by username

  Users.findOne({username}).then(user => {
    if(!user) {
      return res.status(404).json({username: 'user not found'});
    }
    //check password
    bcrypt.compare(password,user.password).then(isMatch => {
      if(isMatch){
        res.json({msg: 'Success'});
      }else {
        return res.status(400).json({password:'password incorrect'});
      }
    });
  });
});

module.exports = router;


