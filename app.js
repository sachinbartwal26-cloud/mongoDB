const userRouter = require("./routes/roleRouter");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/users", userRouter);
module.exports = app;