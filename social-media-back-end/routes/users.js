var express = require('express');
var router = express.Router();
var { signIn, signUp } = require('../controllers/userController');

router.post('/signIN', signIn);

router.post('/signUP', signUp);

module.exports = router;
