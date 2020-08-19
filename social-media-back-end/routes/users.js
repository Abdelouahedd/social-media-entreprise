var express = require('express');
var router = express.Router();
var { signIn } = require('../controllers/userController');

router.post('/signIN', signIn);


module.exports = router;
