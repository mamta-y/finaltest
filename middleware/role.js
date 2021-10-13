const jwt=require('jsonwebtoken');

module.exports = function(req,res,next)
{
  const token= req.header('auth-token');//
 if(!token) return res.status(401).send('access deneid......no token provided');
 try{
const decodedtoken=jwt.verify(token,'Secretkey')
console.log(decodedtoken);
if(decodedtoken.role==='admin' ){
  next();
}
else{
  res.send('only admin has the right');
}
}
catch(err){
    res.status(400).send('invalid token.....')
}}