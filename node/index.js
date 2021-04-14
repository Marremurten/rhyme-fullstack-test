const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const articlesRoute = require("./routes/articles");

const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use(articlesRoute);

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => console.log("connteced to DB")
);

app.listen(5000);
