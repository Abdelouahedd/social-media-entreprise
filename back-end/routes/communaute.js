var express = require('express');
const { getCommunauties, getSearchableCommunauties, getCommunautieById } = require('../controllers/communauteController');
var router = express.Router();
var { verifyToken } = require('../helper/helper');


router.get('/getCommunoties', verifyToken, getCommunauties);
router.get('/', verifyToken, getSearchableCommunauties);
router.get('/:id', verifyToken, getCommunautieById);

// router.put('/addUser/:idCommunaute')


module.exports = router;