const express = require("express");
const suppluCtrl = require("../Controllers/SupplyControllers");
const router = express.Router();
const verify = require("../Middleware/verifyJWT")

router.post("/add", verify, suppluCtrl.addSupply);
router.get("/get"/* , verify */, suppluCtrl.getAllSupplys);

module.exports = router;
