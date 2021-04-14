const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const Article = require("./models/Article");

const app = express();

// const articlesRoute = require("./routes/articles");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(articlesRoute);

app.get("/", (req, res) => {
  res.send;
});

app.post("/", async (req, res) => {
  const post = new Article({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    body: req.body.body,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => console.log("connteced to DB")
);

app.listen(5000);
