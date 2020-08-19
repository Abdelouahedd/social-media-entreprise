var { user, validationRegister, validationConnecter } = require('../models/user');
var { generateHash, comparePassword } = require('../helper/helper');
var jwt = require('jsonwebtoken');

exports.signIn = async (req, res) => {
    try {
        const { nom, prenom, email, mot_pass } = req.body;
        //validate de request body
        const { error } = validationRegister(req.body);
        if (error) {
            return res.status(400).send({ success: false, msg: error.details[0].message });
        }
        //check if user existe
        let chekUser = await user.findOne({ email: req.body.email });
        if (chekUser) {
            return res.status(400).send({ success: false, msg: 'That user already exisits!' });
        }
        // Insert the new user if they do not exist yet
        var Newuser = new user({
            nom: nom,
            prenom: prenom,
            email: email,
            mot_pass: generateHash(mot_pass),
        });
        await Newuser.save((err) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            res.status(200).send({ success: true, msg: `User ${Newuser.nom} is created by succesfully` });
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }

}
exports.signUp = async (req, res) => {
    try {
        const { error } = validationConnecter(req.body);
        if (error) {
            return res.status(400).send({ success: false, msg: error.details[0].message });
        }
        await user.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) throw err;
            if (!user) {
                res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
            } else {
                comparePassword(req.body.mot_pass, user.mot_pass, function (err, isMatch) {
                    if (isMatch && !err) {
                        const token = jwt.sign({ _id: user }, process.env.SECRET_KEY, { expiresIn: '1h' });
                        res.status(200).send({ success: true, token: token });
                    }
                    else {
                        res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                    }
                });
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}