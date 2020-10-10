var express = require('express');
const { getCommunauties, getSearchableCommunauties } = require('../controllers/communauteController');
var router = express.Router();
var { verifyToken } = require('../helper/helper');


router.get('/getCommunoties', verifyToken, getCommunauties);
router.get('/', verifyToken, getSearchableCommunauties);

// router.put('/addUser/:idCommunaute')


module.exports = router;