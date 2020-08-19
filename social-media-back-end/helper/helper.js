import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
        beareHeader = beareHeader.slice(7, beareHeader.length);
        jwt.verify(beareHeader, config.secretKey, function (err, decoded) {
            if (err) return res.json({
                success: false,
                message: 'Token is not valid'
            });
            req.decoded = decoded;
            next();
        });
    } else {
        res.status(403).send({ success: false, msg: "Auth token is not supplied" });
    }
}