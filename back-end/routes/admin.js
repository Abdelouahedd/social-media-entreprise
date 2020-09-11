var express = require('express');
const { getAllInformation } = require('../controllers/adminController');
var router = express.Router();
var { verifyToken, isSuperAdmin } = require('../helper/helper');


router.get('/dash', verifyToken, isSuperAdmin, getAllInformation)


module.exports = router;