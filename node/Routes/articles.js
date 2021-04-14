const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

// get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get Specific article

router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json(article);
  } catch (err) {
    res.json({ message: err });
  }
});

// Post article
router.post("/", async (req, res) => {
  const post = new Article({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  const removeArticle = await Article.remove({ _id: req.params.id });
  res.json(removeArticle);
});

//Update
router.patch("/:id", async (req, res) => {
  const updateArticle = await Article.updateOne(
    { _id: req.params.id },
    { $set: { title: req.body.title } }
  );
  res.json(updateArticle);
});
