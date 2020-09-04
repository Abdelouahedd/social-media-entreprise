const {commantaire, validateComment} = require('../models/commantaire');
const mongoose = require('mongoose')


exports.addComment = async (req, res) => {
    try {
        idPost = req.params._idPost;
        const {content} = req.body;
        //validate de request body
        const {error} = validateComment(req.body);
        if (error) {
            return res.status(400).send({success: false, msg: error.details[0].message});
        }
        const comment = new commantaire({
            content: content,
            user: req.user._id
        });
        await comment.save((err) => {
            if (err)
                res.status(500).json({success: false, error: err.message});
            res.status(200).send({success: true, msg: `Comment is added by successfully`, comment: comment});
        });
    } catch (e) {
        res.status(500).json({success: false, error: error.message});
    }
}