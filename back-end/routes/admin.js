var express = require('express');
const { getAllInformation, getUsers } = require('../controllers/adminController');
const { addCommunaute, addUserToCommunaute, getCommunauties } = require('../controllers/communauteController');
const { addUser, deleteUser } = require('../controllers/userController');
var router = express.Router();
var { verifyToken, isSuperAdmin } = require('../helper/helper');
var { upload } = require('../helper/upload');


router.get('/dash', verifyToken, isSuperAdmin, getAllInformation);
router.get('/users', verifyToken, isSuperAdmin, getUsers);
router.post('/addUser', verifyToken, isSuperAdmin, addUser);
router.delete('/deleteUser/:userId', verifyToken, isSuperAdmin, deleteUser);
router.post('/addCommunaute', verifyToken, isSuperAdmin, upload.single('communauteImg'), addCommunaute);
router.post('/joinUser/:idCommunaute', verifyToken, isSuperAdmin, addUserToCommunaute);
router.get('/getCommunoties', verifyToken, isSuperAdmin, getCommunauties);

module.exports = router;
