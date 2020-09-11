var express = require('express');
const { getAllInformation, getUsers } = require('../controllers/adminController');
const { addUser } = require('../controllers/userController');
var router = express.Router();
var { verifyToken, isSuperAdmin } = require('../helper/helper');


router.get('/dash', verifyToken, isSuperAdmin, getAllInformation);
router.get('/users', verifyToken, isSuperAdmin, getUsers);
router.post('/addUser', verifyToken, isSuperAdmin, addUser);

module.exports = router;