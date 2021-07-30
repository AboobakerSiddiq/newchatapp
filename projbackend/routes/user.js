const express = require("express");
const router = express.Router();
const {putname,getname}=require("../controller/user")


router.post("/name",putname);
router.get("/name",getname);


module.exports = router;