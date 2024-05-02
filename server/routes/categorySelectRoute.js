const express = require("express");
const categorySelectCtrl = require("../Controllers/CategorySelect");
const router = express.Router();

router.get("/categoryElt", categorySelectCtrl.CategorySelect);

module.exports = router;
