var express = require('express');
var router = express.Router();
var {
    signIn,
    signUp,
    updateInfo,
    changeProfilImg,
    changeCuverImg,
    getUserByID,
    updatePassword,
    getUsers,
    adminSignIn
} = require('../controllers/userController');
var { upload } = require('../helper/upload');
var { verifyToken } = require('../helper/helper');

router.post('/signIN', signIn);

router.post('/admin/signIn',adminSignIn)

router.post('/signUP', signUp);

router.put('/editAccount/:id', verifyToken, updateInfo);

router.put('/imgProfil/:id', verifyToken, upload.single('profileImg'), changeProfilImg);

router.put('/imgCuver/:id', verifyToken, upload.single('imgCuver'), changeCuverImg);

router.put('/updatePass/:id', verifyToken, updatePassword);

router.get('/:id', verifyToken, getUserByID);

router.get('/',verifyToken, getUsers);

module.exports = router;
