var express = require('express');
var router = express.Router();
var { createPost } = require('../controllers/postController');
var { verifyToken } = require('../helper/helper');
var { upload } = require('../helper/upload');
router.post('/createPost', verifyToken, upload.single('photo_post'), createPost);

// router.post('/', );

module.exports = router;
