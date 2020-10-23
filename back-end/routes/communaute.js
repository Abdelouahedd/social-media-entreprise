var express = require('express');
var router = express.Router();
const { getCommunauties, getSearchableCommunauties, getCommunautieById } = require('../controllers/communauteController');
const { joinGroup, validateRequest, getRequestOfGroup } = require('../controllers/RequestController');
var { verifyToken, isAdmin } = require('../helper/helper');


router.get('/getCommunoties', verifyToken, getCommunauties);
router.get('/', verifyToken, getSearchableCommunauties);
router.get('/:id', verifyToken, getRequestOfGroup,getCommunautieById);
router.post('/joinGroup/:groupID', verifyToken, joinGroup);
router.post('/validateRequest/:groupID', verifyToken, isAdmin, validateRequest);
router.post('/getRequests/:groupID', verifyToken, getRequestOfGroup);

// router.put('/addUser/:idCommunaute')


module.exports = router;