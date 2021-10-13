const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const Joi=require('joi');
const { Leave ,validateleave} = require('../models/leave-model');


router.get('/',async(req,res)=>{
    const leave=await Leave.find();
    res.send(leave);
})
// router.get('/',async(req,res)=>{
//     const leave=await Leave.find({firstname:'mamta'});
//     leave.select('firstname');
//     res.send(leave);
// })
router.get('/:id',async(req,res)=>{
    const leave=await Leave.findById(req.params.id);
    res.send(leave);

})
router.post('/',async(req,res)=>{
   const result= validateleave(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message)
    }
    let leave= new Leave({
       from:req.body.from,
       to:req.body.to,
       
       reason:req.body.reason,
        
    })
    leave=await leave.save();
    res.send(leave);
})
router.put('/:id',async(req,res)=>{
    
    const leave=await Leave.findByIdAndUpdate(req.params.id,{ from:req.body.from,
        to:req.body.to,
      reason:req.body.reason,
        status:req.body.status},{new:true});
        
        res.send(leave);
    })


router.delete('/:id',async(req,res)=>{
    const leave=await Leave.findByIdAndRemove(req.params.id);
   if(!leave) res.status(404).send(' not found')
   res.send(leave);
})


module.exports=router;