var express = require('express');
var router = express.Router();
var {addComment} = require('../controllers/commentController');
var {verifyToken, isMyOwenShema} = require('../helper/helper');

router.post('/addComment/:postId', verifyToken, addComment);

module.exports = router;