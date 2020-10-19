const { communaute, validateShemaAdd } = require('../models/communaute');
const { user } = require('../models/user');

exports.addCommunaute = async (req, res) => {
    try {
        const { error } = validateShemaAdd(req.body);
        const { titre, visibilite, admin } = req.body
        if (error) {
            return res.status(400).send({ success: false, error: error.details[0].message });
        }
        const newCommunaute = new communaute({
            titre: titre,
            visibilite: visibilite,
            admin: admin,
            photo_com: '/public/images/' + req.file.filename
        });
        //add admin as members
        newCommunaute.members.push(admin);

        const response = await newCommunaute.save();

        await user.findByIdAndUpdate(admin, {
            $set: {
                role: "ADMIN"
            }
        });

        await communaute.findById(response._id)
            .populate({
                path: 'admin', select: ['nom', 'prenom', 'photo_profil'],
            }).exec((err, co) => {
                if (err)
                    res.status(500).json({ success: false, error: err.message });
                res.status(200).send({
                    success: true,
                    msg: `Communaute ${co.titre} is created by succesfully`,
                    communaute: co
                });
            })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.addUserToCommunaute = async (req, res) => {
    try {
        const idCommunaute = req.params.idCommunaute
        const { user } = req.body

        await communaute.findById(idCommunaute, async (err, result) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            result.members.push(user);
            await result.save((err) => {
                if (err) {
                    res.status(500).json({ success: false, error: err.message });
                }
                res.status(200).send({ success: true, msg: `Memebre add by success` });
            })
        })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getCommunauties = async (req, res) => {
    try {
        await communaute.find()
            .populate([{
                path: 'members',
                model: 'User',
                select: ['nom', 'prenom', 'photo_profil'],
            }, {
                path: 'admin',
                model: 'User',
                select: ['nom', 'prenom', 'photo_profil'],
            }])
            .exec((err, result) => {
                if (err) return res.status(500).send({ success: false, msg: "ERROR FROM SERVER", error: err })
                res.send({ success: true, msg: "GET COMMUNAUTEIS BY SUCCES", communaute: result });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getSearchableCommunauties = async (req, res) => {
    try {
        const mygroups = await communaute.find({ "members": { "$in": req.user._id } })
            .populate([{
                path: 'members',
                model: 'User',
                select: ['nom', 'prenom', 'photo_profil'],
            }, {
                path: 'admin',
                model: 'User',
                select: ['nom', 'prenom', 'photo_profil'],
            }])
            .where('visibilite')
            .ne('SECRET')
            .exec();
        const ownGroup = await communaute.find({ "members": { "$ne": req.user._id } })
            .populate([{
                path: 'members',
                model: 'User',
                select: ['nom', 'prenom', 'photo_profil'],
            }, {
                path: 'admin',
                model: 'User',
                select: ['nom', 'prenom', 'photo_profil'],
            }])
            .where('visibilite')
            .ne('SECRET')
            .exec();
        res.send({ success: true, msg: "GET COMMUNAUTEIS BY SUCCES", communaute: mygroups, oderGroup: ownGroup });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


exports.deleteCommunautie = async (req, res) => {
    try {
        console.log("req.body ", req.body);

        await communaute.findByIdAndDelete(req.params.idCommunaute)
            .exec((err) => {
                if (err) return res.status(500).send({ success: false, msg: "ERROR FROM SERVER", error: err });
            });

        let communauteAsAdmin = await communaute.find({ admin: req.body.admin }).countDocuments();

        console.log("nbr of communautie as admin is :", communauteAsAdmin);
        if (communauteAsAdmin === 0) {
            await user.findByIdAndUpdate(req.body.admin, {
                $set: {
                    role: "USER"
                }
            }, (err) => {
                if (err) return res.status(500).send({ success: false, msg: "ERROR FROM SERVER", error: err });
            });
        }
        res.send({ success: true, msg: "DELETE COMMUNAUTEIS BY SUCCES" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
