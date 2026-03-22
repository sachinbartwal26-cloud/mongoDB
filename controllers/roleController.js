const userServices = require("../services/roleServices");
exports.register = async (req, res)=>{
    try{
       const user =  await userServices.register(req.body);
        res.status(201).json({
            message:"User create successfully",
            user
        });
    }
    catch(err){
         res.status(401).json({
            message : "Registration failed",
            Error:err.message
        });
    }
}

exports.login = async (req, res)=>{
    try{
       const user =  await userServices.login(req.body);
        res.status(201).json({
            message:"User create successfully",
            user
        });
    }
    catch(err){
         res.status(401).json({
            message : "Login failed ",
            Error:err.message
        });
    }
}