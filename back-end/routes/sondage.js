var express = require('express');
const { addSondage, addVote, getDefaultOption } = require('../controllers/sondageController');
const { verifyToken } = require('../helper/helper');
var router = express.Router();

router.post('/addSondage', verifyToken, addSondage);
router.get('/getdefault/:_idSondage', verifyToken, getDefaultOption);
router.post('/addVote/:_idSondage', verifyToken, addVote);



module.exports = router;
