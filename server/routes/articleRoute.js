const express = require("express");
const articleCtrl = require("../Controllers/ArticleControllers");
const router = express.Router();

router.post("/add", articleCtrl.addArticle);
router.post("/update", articleCtrl.UpdateArticle);
router.delete("/delete/:article_id", articleCtrl.DeleteArticle);

router.get("/get", articleCtrl.GetArticle);

module.exports = router;
