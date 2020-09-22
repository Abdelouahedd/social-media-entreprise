var express = require('express');
const { verifyToken } = require("../helper/helper");
const { createEvent } = require("../controllers/eventController");
const { upload } = require("../helper/upload");
var router = express.Router();

router.post('/createEvent', verifyToken, upload.single('cover_img'), createEvent);



module.exports = router;