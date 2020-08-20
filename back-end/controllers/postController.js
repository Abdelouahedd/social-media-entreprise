
const { upload } = require('../helper/upload');
const post = require('../models/post');
exports.createPost = async (req, res) => {
    try {
        const { sujet } = req.body;
        const url = req.protocol + '://' + req.get('host');
        var path = url + '/public/images/' + req.file.filename;

        var newPost = new post({
            sujet: sujet,
            photo_post: path,
            user: req.user._id,
        });
        await newPost.save((err, post) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            res.status(200).send({ success: true, msg: `Post is created by succesfully`, post: post });
        })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
