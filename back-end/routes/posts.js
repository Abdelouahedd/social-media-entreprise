var express = require('express');
var router = express.Router();
var {createPost, updatePost, deletePost, getPostByUserId, getPosts} = require('../controllers/postController');
var {verifyToken, isMyOwenShema} = require('../helper/helper');
var {upload} = require('../helper/upload');

router.post('/createPost', verifyToken, upload.array('files', 10), createPost);
router.put('/editPost/:id', verifyToken, isMyOwenShema, updatePost);
router.delete('/deletePost/:id', verifyToken, isMyOwenShema, deletePost);
router.get('/:user_id', getPostByUserId);
router.get('/', getPosts);
// router.post('/', );

module.exports = router;
