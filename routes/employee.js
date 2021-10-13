const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const Joi=require('joi');
const { Emp,validateemp}=require('../models/emp-model');


router.get('/',async(req,res)=>{
    const emp=await Emp.find();
    res.send(emp);
})
router.get('/:id',async(req,res)=>{
    const emp=await Emp.findById(req.params.id);
    res.send(emp);

})
router.post('/',async(req,res)=>{
   const result= validateemp(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message)
    }
    let emp= new Emp({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        departmentname:req.body.departmentname,
        joiningdate:req.body.joiningdate,
        date_of_birth:req.body.date_of_birth
        
    })
    emp=await emp.save();
    res.send(emp);
})
router.put('/:id',async(req,res)=>{
    // const result=validateemp(req.body);
    // if(result.error){
    //     res.status(400).send(result.error.details[0].message)
    // }
    
    const emp=await Emp.findByIdAndUpdate(req.params.id,{firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        departmentname:req.body.departmentname,
        joiningdate:req.body.joiningdate,
        date_of_birth:req.body.date_of_birth},{new:true});
        
        res.send(emp);
    })
router.delete('/:id',async(req,res)=>{
    const emp=await Emp.findByIdAndRemove(req.params.id);
   if(!emp) res.status(404).send('Employee not found')
   res.send(emp);
})
module.exports=router;