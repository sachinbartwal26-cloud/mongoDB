const mongoose = require("mongoose");
const connectDb = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017");
        console.log("connect successfully");
    }
    catch(err){
        console.log("Failed connection", err);
    }
}
module.exports = connectDb;