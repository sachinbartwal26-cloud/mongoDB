require("dotenv").config();
const ConnectDb = require("./config/db");
const app = require("./app");
const serverStart = async()=>{
    await ConnectDb();

    app.get("/", (req, res)=>{
      res.send("hello siou")
    })
    app.listen(process.env.port, ()=>{
    console.log("server is running", process.env.port);
    })  
}

serverStart();