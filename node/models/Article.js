const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
  title: String,
  description: String,
  author: String,
  body: String,
});

module.exports = mongoose.model("Article", ArticleSchema);
