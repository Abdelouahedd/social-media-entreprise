var express = require('express');
const { getEvents, getEventsByGroupId } = require('../controllers/eventController');
const { getSondage, getSondageByGroupId } = require('../controllers/sondageController');
var router = express.Router();
var { createPost, updatePost, deletePost, getPostByUserId, getPosts, addLike, deslike, getPostById, getPostByGroupId } = require('../controllers/postController');
var { verifyToken, isMyOwenShema, isMyGroup } = require('../helper/helper');
var { upload } = require('../helper/upload');

router.get('/', verifyToken, getPosts, getSondage, getEvents);
router.get('/:id', verifyToken, isMyGroup, getPostByGroupId, getSondageByGroupId, getEventsByGroupId);
router.post('/createPost', verifyToken, upload.array('files', 10), createPost);
router.put('/editPost/:id', verifyToken, isMyOwenShema, updatePost);
router.delete('/deletePost/:id', verifyToken, isMyOwenShema, deletePost);
router.get('/:user_id', getPostByUserId);
router.put('/like/:id', verifyToken, addLike, getPostById);
router.put('/deslike/:id', verifyToken, deslike, getPostById);

module.exports = router;
