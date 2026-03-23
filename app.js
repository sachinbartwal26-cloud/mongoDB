const userRouter = require("./routes/roleRouter");
const newsRouter = require("./routes/newsRouter");

const express = require("express");
const app = express();

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/users", userRouter);
app.use("/api/news", newsRouter);

module.exports = app;
