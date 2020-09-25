var express = require('express');
const { addSondage } = require('../controllers/sondageController');
const { verifyToken } = require('../helper/helper');
var router = express.Router();

router.post('/addSondage', verifyToken, addSondage);



module.exports = router;
