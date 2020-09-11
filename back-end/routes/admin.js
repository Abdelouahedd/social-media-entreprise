var express = require('express');
const { getAllInformation, getUsers } = require('../controllers/adminController');
const { addCommunaute, addUserToCommunaute } = require('../controllers/communauteController');
const { addUser } = require('../controllers/userController');
var router = express.Router();
var { verifyToken, isSuperAdmin } = require('../helper/helper');
var { upload } = require('../helper/upload');


router.get('/dash', verifyToken, isSuperAdmin, getAllInformation);
router.get('/users', verifyToken, isSuperAdmin, getUsers);
router.post('/addUser', verifyToken, isSuperAdmin, addUser);
router.post('/addCommunaute', verifyToken, isSuperAdmin, upload.single('communauteImg'), addCommunaute);
router.post('/joinUser/:idCommunaute', verifyToken, isSuperAdmin, addUserToCommunaute);

module.exports = router;