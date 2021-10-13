const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const Joi=require('joi');
const lodash = require('lodash');
const bcrypt = require('bcrypt');
const { validateuser } = require('../models/user-model');
const { User } = require('../models/user-model');

router.post('/',async(req,res)=>{
const result=validateuser(req.body);
if(result.error){
    res.status(400).send(result.error.details[0].message)
}
let user= await User.findOne({email:req.body.email})
if(user) return res.status(400).send('Email Already Exist....')
user=new User (lodash.pick(req.body,['firstname','lastname','email','password','role']));
const salt= await bcrypt.genSalt(10);
user.password= await bcrypt.hash(user.password,salt);
user= await user.save();

res.send(user);


})
module.exports=router;