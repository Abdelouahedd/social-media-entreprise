var express = require('express');
var router = express.Router();
var { createPost, updatePost, deletePost, getPostByUserId, getPosts } = require('../controllers/postController');
var { verifyToken } = require('../helper/helper');
var { upload } = require('../helper/upload');

router.post('/createPost', verifyToken, upload.single('photo_post'), createPost);
router.put('/editPost/:id', verifyToken, updatePost);
router.delete('/deletePost/:id', verifyToken, deletePost);
router.get('/:user_id', getPostByUserId);
router.get('/', getPosts)
// router.post('/', );

module.exports = router;
