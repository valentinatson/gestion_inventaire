const express = require("express");
const sellCtrl = require("../Controllers/SellControllers");
const verify = require("../Middleware/verifyJWT")

const router = express.Router();

router.post("/add",verify, sellCtrl.addSell);
router.get("/get"/* ,verify */, sellCtrl.getAllSells);

module.exports = router;
