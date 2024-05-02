const express = require("express");
const articleSelectCtrl = require("../Controllers/ArticleSelect");
const router = express.Router();

router.get("/articleElt", articleSelectCtrl.ArticleSelect);

module.exports = router;
