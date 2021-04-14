const express = require("express");
const router = express.Router();
const {
  articles_get_all,
  articles_get_by_id,
  articles_create,
  articles_delete,
  articles_update,
} = require("../controllers/articles");

//Routes
router.get("/", articles_get_all);
router.get("/:id", articles_get_by_id);
router.post("/", articles_create);
router.delete("/:id", articles_delete);
router.put("/:id", articles_update);

module.exports = router;
