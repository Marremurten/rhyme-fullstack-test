const express = require("express");
const moongoose = require("moongoose");
require("dotenv/config");

const app = express();

const articlesRoute = require("./routes/articles");

app.use("/articles", articlesRoute);

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => console.log("connteced to DB")
);

app.listen(5000);
