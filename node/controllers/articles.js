const Article = require("../models/Article");

exports.articles_get_all = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.articles_get_by_id = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json(article);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.articles_create = async (req, res) => {
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
};

exports.articles_delete = async (req, res) => {
  const removeArticle = await Article.remove({ _id: req.params.id });
  try {
    res.json(removeArticle);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.articles_update = async (req, res) => {
  const updateArticle = await Article.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        body: req.body.body,
      },
    }
  );
  try {
    res.json(updateArticle);
  } catch (err) {
    res.json({ message: err });
  }
};
