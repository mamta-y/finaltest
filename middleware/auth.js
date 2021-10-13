const jwt=require('jsonwebtoken');


function auth(req,res,next){
const token= req.header('auth-token');
 if(!token) return res.status(401).send('Access Deneid......No Token Provided');
 try{
const decodedtoken=jwt.verify(token,'Secretkey')
console.log(decodedtoken);
req.user=decodedtoken
next();
}
catch(err){
    res.status(400).send('UnAuthorized Token.....')
}}

module.exports=auth;