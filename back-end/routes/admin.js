var express = require('express');
const {getAllInformation, getUsers, getCommunauteInfo} = require('../controllers/adminController');
const {addCommunaute, addUserToCommunaute, getCommunauties, deleteCommunautie} = require('../controllers/communauteController');
const {addUser, deleteUser, acceptRequest, activateAcount} = require('../controllers/userController');
var router = express.Router();
var {verifyToken, isSuperAdmin} = require('../helper/helper');
var {upload} = require('../helper/upload');


router.get('/dash', verifyToken, isSuperAdmin, getAllInformation);

router.get('/users', verifyToken, isSuperAdmin, getUsers);
router.post('/addUser', verifyToken, isSuperAdmin, addUser);
router.put('/acceptRequest/:userId', verifyToken, isSuperAdmin, acceptRequest);
router.put('/activateAcount/:userId', verifyToken, isSuperAdmin, activateAcount);
router.delete('/deleteUser/:userId', verifyToken, isSuperAdmin, deleteUser);

router.post('/addCommunaute', verifyToken, isSuperAdmin, upload.single('communautieImg'), addCommunaute);
router.post('/joinUser/:idCommunaute', verifyToken, isSuperAdmin, addUserToCommunaute);
router.get('/getCommunoties', verifyToken, isSuperAdmin, getCommunauties);
router.get('/getCommunautieInfo', verifyToken, isSuperAdmin, getCommunauteInfo);
router.delete('/deleteCommunautie/:idCommunaute', verifyToken, isSuperAdmin, deleteCommunautie);

module.exports = router;
