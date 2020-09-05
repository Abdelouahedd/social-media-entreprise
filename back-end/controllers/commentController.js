const {commantaire, validateComment} = require('../models/commantaire');
const mongoose = require('mongoose')
const post = require('../models/post');


exports.addComment = async (req, res) => {
    try {
        const {content} = req.body;
        //validate de request body
        const {error} = validateComment(req.body);
        if (error) {
            return res.status(400).send({success: false, msg: error.details[0].message});
        }

        //create new comment
        const comment = new commantaire({
            content: content,
            userComment: req.user._id
        });
        //save the comement
        await comment.save(async (err, comment) => {
            if (err)
                res.status(500).json({success: false, error: err.message});
            const currentPost = await post.findById(req.params.postId);
            //add comment to array of comments in our post
            currentPost.commantaires.push(comment);
            await currentPost.save((err, post) => {
                res.status(200).send({
                    success: true,
                    msg: `Comment is added by successfully`,
                    comment: comment,
                    post: post
                });
            });
        });

        //get the post reference to our comment


    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}