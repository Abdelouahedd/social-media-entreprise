const mongoose = require('mongoose');
const { communaute } = require('../models/communaute');
const { requestJoinGroup } = require("../models/requestJoinGroup");


exports.joinGroup = async (req, res) => {
    try {
        const newRequest = new requestJoinGroup({
            user: req.user._id,
            group: req.params.groupID
        });
        await newRequest.save();
        res.status(200).send({ success: true, msg: `request is sended to admin` });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.validateRequest = async (req, res) => {
    try {
        const group = await communaute.findById(mongoose.Types.ObjectId(req.params.groupID));
        group.members.push(req.user._id);
        const newGroup = await group.save();

        await requestJoinGroup.deleteOne().and([{ user: req.user._id, group: req.params.groupID }]);

        res.status(200).send({ success: true, msg: `the user ${req.user.nom} is succesfully added to group ${newGroup.titre}` });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


exports.getRequestOfGroup = async (req, res, next) => {
    try {
        await requestJoinGroup.find({ group: mongoose.Types.ObjectId(req.params.id) })
            .populate('group', ['titre'])
            .populate('user', ['nom', 'prenom', 'photo_profil'])
            .exec((err, requests) => {
                if (err) {
                    res.status(500).json({ success: false, error: err.message });
                }
                res.locals.request = requests;
                next();
                // res.status(200).send({ success: true, requests: requests });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
