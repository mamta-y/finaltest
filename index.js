require('dotenv').config();
const express = require('express');
const cors=require('cors');
const app = express();
const mongoose=require('mongoose');
const Joi=require('joi');
const empdetail=require('./routes/employee');
const users=require('./routes/users')
const login=require('./routes/login')
const leave=require('./routes/leave');


mongoose.connect("mongodb://localhost/employee")
.then(()=>console.log('connected to db'))
.catch(()=>console.log('not conneccted to db'))
app.use(express.json());
app.use(cors());


app.use('/api/empdetail',empdetail);
app.use('/api/register',users);
app.use('/api/login',login);
app.use('/api/leave',leave);


const port=process.env.PORT || 4000
app.listen(port,()=> console.log(`listening to ${port}`));
