var { user, validationRegister, validationConnecter, validationUpdate } = require('../models/user');
var { generateHash, comparePassword } = require('../helper/helper');
var jwt = require('jsonwebtoken');
const { status, role } = require('../helper/enums/enum');

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
            role: role.SUPER_ADMIN
        }, (err, currentUser) => {
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
            if (err) throw err;
            if (!user) {
                res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
            } else {
                if (user.status === status.WAIT) {
                    res.status(403).send({ success: true, msg: "Your request to join us isn't submitted", status: user.status });
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
        user.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                photo_profil: '/public/images/' + req.file.filename
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
        user.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                photo_couverture: '/public/images/' + req.file.filename
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
        await user.find()
            .where('role')
            .ne(role.SUPER_ADMIN)
            .where('_id')
            .ne(req.user._id)
            .select("-mot_pass")
            .limit(10)
            .exec((err, result) => {
                if (err) return res.status(500).send({ success: false, msg: "ERROR FROM SERVER", error: err })
                return res.send({ success: true, msg: "GET USERS BY SUCCES", user: result });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.addUser = async (req, res) => {
    try {
        const { nom, prenom, email, telephone, photo_profil, gender, fonction, mot_pass } = req.body;
        //check if user existe
        let chekUser = await user.findOne({ email: req.body.email });
        if (chekUser) {
            return res.status(400).send({ success: false, msg: 'That user already exisits!' });
        }
        // Insert the new user if they do not exist yet
        var Newuser = new user({
            email: email,
            nom: nom,
            prenom: prenom,
            telephone: telephone,
            fonction: fonction,
            gender: gender,
            photo_profil: photo_profil,
            mot_pass: generateHash(mot_pass),
            status: status.ACCEPT
        });
        await Newuser.save((err, result) => {
            if (err) {
                res.status(500).json({ success: false, msg: err.message });
            }
            res.status(200).send({ success: true, user: result, msg: `User ${Newuser.nom} is created by succesfully` });
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await user.findByIdAndDelete({ _id: req.params.userId }, (err, result) => {
            if (err) return res.status(500).send({ success: false, msg: "ERROR FROM SERVER", error: err })
            res.send({ success: true, msg: "USER DELETED BY SUCCES", user: result });
        });

    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

exports.desactivateAcount = async (req, res) => {
    try {
        await user.findOneAndUpdate({ _id: req.params.userId }, {
            $set: {
                status: status.DESACTIVE
            },
        }, { new: true },
            (err) => {
                if (err) return res.status(500).send({ success: false, error: err });
                res.status(200).send({ success: true, msg: "Your account has been desactivated" });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}



exports.acceptRequest = async (req, res) => {
    try {
        await user.findOneAndUpdate({ _id: req.params.userId }, {
            $set: {
                status: status.ACCEPT
            },
        }, { new: true },
            (err, user) => {
                if (err) return res.status(500).send({ success: false, error: err });
                res.status(200).send({ success: true, msg: `request of ${user.nom} has been accepted` });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


exports.activateAcount = async (req, res) => {
    try {
        await user.findOneAndUpdate({ _id: req.params.userId }, {
            $set: {
                status: status.ACCEPT
            },
        }, { new: true },
            (err) => {
                if (err) return res.status(500).send({ success: false, error: err });
                res.status(200).send({ success: true, msg: "Your account has been activated" });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}