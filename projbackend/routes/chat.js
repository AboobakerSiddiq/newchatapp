const express = require("express");
const router = express.Router();
const {putChat,getChat}=require("../controller/chat")


router.post("/chat",putChat);
router.get("/chat",getChat);

module.exports = router;