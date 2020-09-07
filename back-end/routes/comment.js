var express = require('express');
var router = express.Router();
var {addComment, addReplayComment} = require('../controllers/commentController');
var {verifyToken, isMyOwenShema} = require('../helper/helper');

router.post('/addComment/:postId', verifyToken, addComment);
router.post('/addReplayComment/:commentId', verifyToken, addReplayComment);

module.exports = router;