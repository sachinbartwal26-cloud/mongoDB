const User = require("../models/roleModel");
const generateToken = require("../utils/generateToken")
const bcrypt = require("bcrypt");

exports.register = async (data)=>{
  const hashPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashPassword,
    role: data.role
  });
  return user;
}

exports.login = async (data) =>{
 const user = await User.findOne({ email:data.email });
 if(!user){
     throw new Error("User not found");
 }
 const hashCompare = await bcrypt.compare(data.password, user.password);
 if (!hashCompare){
   throw new Error("password not match");
 }
 const token = generateToken(user);
return(
  {
    token
  }
)
}