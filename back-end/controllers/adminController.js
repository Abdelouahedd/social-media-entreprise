
const post = require('../models/post');
const { user } = require('../models/user');
const { communaute } = require('../models/communaute');

exports.getAllInformation = async (req, res) => {
    try {
        var dashObject = {
            nbrPost: 0,
            nbrUsers: 0,
            nbrCommunities: 0,
            nbrRequest: 0,
            newUser: []
        }

        dashObject.nbrPost = await post.count({})
            .catch((error) => {
                res.status(500).json({ success: false, msg: error.message });
            });
        dashObject.nbrUsers = await user.countDocuments().where('role')
            .ne('SUPER_ADMIN').count({})
            .catch((error) => {
                res.status(500).json({ success: false, msg: error.message });
            });
        dashObject.nbrCommunities = await communaute.countDocuments()
            .catch((error) => {
                res.status(500).json({ success: false, msg: error.message });
            });
        dashObject.newUser = await user.find({}).where('role').ne('SUPER_ADMIN').select("-mot_pass")
            .sort({ createdAt: "desc" }).limit(5)
            .catch((error) => {
                res.status(500).json({ success: false, msg: error.message });
            });


        res.status(200).json({
            success: true,
            dashObject: dashObject
        })

    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}


exports.getUsers = async (req, res) => {
    try {
        await user.find()
            .where('role')
            .ne('SUPER_ADMIN')
            .select("-mot_pass")
            .sort({ createdAt: "desc" })
            .exec((err, result) => {
                if (err) return res.status(500).send({ success: false, msg: "ERROR FROM SERVER", error: err })
                res.send({ success: true, msg: "GET USERS BY SUCCES", user: result });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}



exports.getCommunotie = async (req, res) => {
    try {
        await communaute.find({})
            .exec((err, result) => {
                if (err) return res.status(500).send({ success: false, msg: "ERROR FROM SERVER", error: err })
                res.send({ success: true, msg: "GET COMMUNOTIE BY SUCCES", communaute: result });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}










