const post = require('../models/post');
const { user } = require('../models/user');
const { communaute } = require('../models/communaute');
const { event } = require('../models/evenement');
const { sondage } = require('../models/sondage');
const { status, role } = require('../helper/enums/enum');

exports.getAllInformation = async (req, res) => {
    try {
        var dashObject = {
            nbrPost: 0,
            nbrEvent: 0,
            nbrSondage: 0,
            nbrUsers: 0,
            nbrCommunities: 0,
            nbrRequest: 0,
            nbrUserByDate: [],
            requestUsers: []
        }

        dashObject.nbrPost = await post.countDocuments({})
            .catch((error) => {
                return res.status(500).json({ success: false, msg: error.message });
            });
        dashObject.nbrEvent = await event.countDocuments({})
            .catch((error) => {
                return res.status(500).json({ success: false, msg: error.message });
            });
        dashObject.nbrSondage = await sondage.countDocuments({})
            .catch((error) => {
                return res.status(500).json({ success: false, msg: error.message });
            });
        dashObject.nbrUsers = await user.countDocuments().where('role')
            .ne(role.SUPER_ADMIN).countDocuments({})
            .catch((error) => {
                return res.status(500).json({ success: false, msg: error.message });
            });
        dashObject.nbrRequest = await user.where('status', status.WAIT).countDocuments({})
            .catch((error) => {
                return res.status(500).json({ success: false, msg: error.message });
            });
        dashObject.nbrCommunities = await communaute.countDocuments()
            .catch((error) => {
                return res.status(500).json({ success: false, msg: error.message });
            });

        dashObject.requestUsers = await user.find({ status: status.WAIT })
            .where('role').ne(role.SUPER_ADMIN).select("-mot_pass")
            .sort({ createdAt: "desc" }).limit(10)
            .catch((error) => {
                return res.status(500).json({ success: false, msg: error.message });
            });
        dashObject.nbrUserByDate = await user.aggregate(
            [
                {
                    $group: {
                        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                        count: { $sum: 1 }
                    }
                }
            ]
        ).catch((error) => {
            return res.status(500).json({ success: false, msg: error.message });
        });


        return res.status(200).json({
            success: true,
            dashObject: dashObject
        })

    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}


exports.getUsers = async (req, res) => {
    try {
        await user.find({ status: status.ACCEPT })
            .where('role')
            .ne(role.SUPER_ADMIN)
            .select("-mot_pass")
            .sort({ createdAt: "desc" })
            .limit(10)
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


exports.getCommunauteInfo = async (req, res) => {

    try {
        var commVue = {
            communaute: [],
            users: []
        }
        await communaute.find()
            .populate([
                {
                    path: 'membre',
                    model: 'User',
                    select: ['nom', 'prenom', 'photo_profil'],
                },
                {
                    path: 'admin',
                    model: 'User',
                    select: ['nom', 'prenom', 'photo_profil'],
                }
            ])
            .exec(async (err, result) => {
                if (err) return res.status(500).send({ success: false, msg: "ERROR FROM SERVER", error: err })
                commVue.communaute = result;
                commVue.users = await user.find({
                    role: {
                        $not: {
                            $in: ['SUPER_ADMIN']
                        }
                    }
                })
                    .select('nom prenom photo_profil role')
                    .exec();
                res.send({ success: true, msg: "GET COMMUNAUTEIS vue BY SUCCES", data: commVue });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


