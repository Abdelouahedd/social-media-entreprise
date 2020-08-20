var express = require('express');
var router = express.Router();
var { signIn, signUp,updateInfo } = require('../controllers/userController');

router.post('/signIN', signIn);

router.post('/signUP', signUp);

router.put('/editAccount:id',updateInfo)
module.exports = router;
