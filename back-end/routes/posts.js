var express = require('express');
const { getEvents } = require('../controllers/eventController');
var router = express.Router();
var { createPost, updatePost, deletePost, getPostByUserId, getPosts, addLike, deslike, getPostById } = require('../controllers/postController');
var { verifyToken, isMyOwenShema } = require('../helper/helper');
var { upload } = require('../helper/upload');

router.get('/', verifyToken, getPosts,getEvents);
router.post('/createPost', verifyToken, upload.array('files', 10), createPost);
router.put('/editPost/:id', verifyToken, isMyOwenShema, updatePost);
router.delete('/deletePost/:id', verifyToken, isMyOwenShema, deletePost);
router.get('/:user_id', getPostByUserId);
router.put('/like/:id', verifyToken, addLike, getPostById);
router.put('/deslike/:id', verifyToken, deslike, getPostById);

module.exports = router;
