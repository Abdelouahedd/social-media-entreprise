const bcrypt = require("bcrypt-nodejs");
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { communaute } = require("../models/communaute");
//hash password
exports.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}


//compare password
exports.comparePassword = function (pw, pw1, cb) {
    bcrypt.compare(pw, pw1, function (err, isMatch) {
        if (err)
            return cb(err);

        cb(null, isMatch);
    });
};

/*verfier token */
exports.verifyToken = async (req, res, next) => {
    var beareHeader = req.headers['x-access-token'] || req.headers['authorization'];
    if (beareHeader) {
        // beareHeader = beareHeader.slice(7, beareHeader.length);
        beareHeader = beareHeader.split(' ')[1];
        await jwt.verify(beareHeader, process.env.SECRET_KEY, function (err, decoded) {
            if (err)
                return res.status(403).json({
                    success: false,
                    message: 'Token is not valid'
                });
            if (decoded.user.role === "USER")
                req.user = decoded.user;
            else if (decoded.user.role === "ADMIN") {
                req.admin = decoded.user;
                req.user = decoded.user;
            }
            else if (decoded.user.role === "SUPER_ADMIN")
                req.SuperAdmin = decoded.user;
            next();
        });
    } else {
        res.status(403).send({ success: false, msg: "Auth token is not supplied" });
    }
}

//verifier if the schema is owen to user

exports.isMyOwenShema = (req, res, next) => {
    if (req.user._id !== req.body.user) {
        next(new Error("Don't have a right to update or delete this post"));
    }
    next();
}
// allow super admin

exports.isSuperAdmin = (req, res, next) => {
    if (!req.SuperAdmin) {
        next(new Error("You are not a super admin"));
    }
    next();
}

// allow to acces to posts of group

exports.isMyGroup = async (req, res, next) => {
    const checkUserInGroup = await communaute.find({ _id: req.params.id, members: { $elemMatch: { $eq: req.user._id } } })

    if (!checkUserInGroup) {
        next(new Error("You are not a member of this group"));
    }
    next();
}

//allow admin to validate request

exports.isAdmin = async (req, res, next) => {
    if (!req.admin) {
        next(new Error("You are not a  admin"));
    } else {
        const IsAdminOfTheGroup = await communaute.find().and([{ _id: req.params.groupID }, { admin: req.admin }]);
        if (!IsAdminOfTheGroup) {
            next(new Error("You are not a admin of this group"));
        }
        next();
    }
}