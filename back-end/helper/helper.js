const bcrypt = require("bcrypt-nodejs");
var jwt = require('jsonwebtoken');
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
exports.verifyToken = (req, res, next) => {
    var beareHeader = req.headers['x-access-token'] || req.headers['authorization'];
    if (beareHeader) {
        // beareHeader = beareHeader.slice(7, beareHeader.length);
        beareHeader = beareHeader.split(' ')[1];
        jwt.verify(beareHeader, process.env.SECRET_KEY, function (err, decoded) {
            if (err)
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            if (decoded.user.role === "USER")
                req.user = decoded.user;
            else if (decoded.user.role === "ADMIN")
                req.admin = decoded.user;
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
    if (req.SuperAdmin) {
        next(new Error("You are not a super admin"));
    }
    next();
}
