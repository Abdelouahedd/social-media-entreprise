var { user, validationRegister, validationConnecter, validationUpdate } = require('../models/user');
var { generateHash, comparePassword } = require('../helper/helper');
var jwt = require('jsonwebtoken');
const { log } = require('debug');
const { object } = require('joi');

exports.signUp = async (req, res) => {
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

exports.adminSignIn = async (req, res) => {
    try {
        const { error } = validationConnecter(req.body);
        if (error) {
            return res.status(400).send({ success: false, msg: error.details[0].message });
        }
        user.findOne({
            email: req.body.email,
            role: "SUPER_ADMIN"
        })
        .select('-mot_pass')
        .exec((err, currentUser) => {
                if (err) {
                    res.status(500).send({ success: false, msg: err.message });
                };
                if (!currentUser) {
                    res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
                } else {
                    comparePassword(req.body.mot_pass, currentUser.mot_pass, function (err, isMatch) {
                        if (isMatch && !err) {
                            const token = jwt.sign({ user: currentUser }, process.env.SECRET_KEY, { expiresIn: '48h' });
                            res.status(200).send({ success: true, msg: 'Authentication succes', token: token });
                        } else {
                            res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                        }
                    });
                }
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.signIn = async (req, res) => {
    try {
        const { error } = validationConnecter(req.body);
        if (error) {
            return res.status(400).send({ success: false, msg: error.details[0].message });
        }
        user.findOne({
            email: req.body.email
        }, (err, user) => {
            console.log("user" + user);
            if (err) throw err;
            console.log(user);
            if (!user) {
                res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
            } else {
                comparePassword(req.body.mot_pass, user.mot_pass, function (err, isMatch) {
                    if (isMatch && !err) {
                        const token = jwt.sign({ user: user }, process.env.SECRET_KEY, { expiresIn: '48h' });
                        res.status(200).send({ success: true, msg: 'Authentication succes', token: token });
                    } else {
                        res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                    }
                });
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateInfo = async (req, res) => {
    try {
        const { error } = validationUpdate(req.body);
        if (error) {
            return res.status(400).send({ success: false, msg: error.details[0].message });
        }
        user.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                email: req.body.email,
                nom: req.body.nom,
                prenom: req.body.prenom,
                telephone: req.body.telephone,
                date_naissance: req.body.date_naissance,
                descriptif: req.body.descriptif,
                ville: req.body.ville,
                address: req.body.address,
                fonction: req.body.fonction,
                gender: req.body.gender
            },
        }, { new: true }, (err, result) => {
            if (err) return res.send(err)
            res.status(200).send({ success: true, msg: "User Updated by succes", res: result });
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.changeProfilImg = async (req, res) => {
    try {
        const url = req.protocol + '://' + req.get('host')
        user.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                photo_profil: url + '/public/images/' + req.file.filename
            },
        }, { new: true },
            (err, result) => {
                if (err) return res.send(err)
                res.send({ success: true, msg: "img profil Updated", imgUrl: result.photo_profil });
            })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.changeCuverImg = async (req, res) => {
    try {
        const url = req.protocol + '://' + req.get('host')
        user.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                photo_couverture: url + '/public/images/' + req.file.filename
            },
        }, { new: true },
            (err, result) => {
                if (err) return res.status(500).send({ success: false, error: err })
                res.send({ success: true, msg: "img cuver Updated", imgUrl: result.photo_couverture });
            })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getUserByID = async (req, res) => {
    try {
        await user.findOne({ _id: req.params.id }, (err, result) => {
            if (err) return res.status(500).send({ success: false, msg: "ERROR FROM SERVER", error: err })
            res.send({ success: true, msg: "GET USER BY SUCCES", user: result });
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updatePassword = async (req, res) => {
    try {
        user.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                mot_pass: generateHash(req.body.password)
            },
        }, { new: true },
            (err) => {
                if (err) return res.status(500).send({ success: false, error: err });
                res.status(200).send({ success: true, msg: "Password updated by succes" });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getUsers = async (req, res) => {
    try {
        await user.find({})
            .select("-mot_pass")
            .exec((err, result) => {
                if (err) return res.status(500).send({ success: false, msg: "ERROR FROM SERVER", error: err })
                res.send({ success: true, msg: "GET USERS BY SUCCES", user: result });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
