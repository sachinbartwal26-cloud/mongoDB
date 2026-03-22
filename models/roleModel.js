const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { 
        type:String,
        required:[true, "Name is required"],
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"],
    },
    role:{
        type:String,
        enum:["admin", "teacher", "user"],
        default:"user" 
    }, 
}, {
        timestamps:true,
        strict: true
    });

module.exports = mongoose.model("Role", userSchema);

 