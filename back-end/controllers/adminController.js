
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
                res.status(500).json({ success: false, error: error.message });
            });
        dashObject.nbrUsers = await user.countDocuments().where('role')
            .ne('SUPER_ADMIN').count({})
            .catch((error) => {
                res.status(500).json({ success: false, error: error.message });
            });;
        dashObject.nbrCommunities = await communaute.countDocuments()
            .catch((error) => {
                res.status(500).json({ success: false, error: error.message });
            });;
        dashObject.newUser = await user.find({}).where('role').ne('SUPER_ADMIN').select("-mot_pass").
            sort({ createdAt: "desc" }).limit(5)
            .catch((error) => {
                res.status(500).json({ success: false, error: error.message });
            });;


        res.status(200).json({
            success: true,
            dashObject: dashObject
        })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}