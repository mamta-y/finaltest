const lodash = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User ,validateUser} = require('../models/user-model');
const express = require('express');
const router = express.Router();
const Joi = require('joi');

router.post('/', async (req, res) => {
    const result = validateCred(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
    }
    
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('user doesnot exist, please register.....') 
     const validpswd=await bcrypt.compare(req.body.password,user.password) 
    if(!validpswd) return res.status(400).send('invalid email password');
  const token= jwt.sign({_id:user._id,role:user.role},'Secretkey');
   res.status(200).header("auth-token",token).send({"token":token,"role":user.role});
    });

    
function validateCred(user){
    const schema = Joi.object({
       email:Joi.string().required().min(5).max(50).email(),
       password:Joi.string().required().min(5).max(50)
       
    });
    return schema.validate(user);
} 
module.exports = router;