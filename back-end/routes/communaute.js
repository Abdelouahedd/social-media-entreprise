var express = require('express');
const { getCommunauties } = require('../controllers/communauteController');
var router = express.Router();
var { verifyToken } = require('../helper/helper');


router.get('/getCommunoties', verifyToken, getCommunauties);

// router.put('/addUser/:idCommunaute')


module.exports = router;