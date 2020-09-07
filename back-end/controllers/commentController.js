const {commantaire, validateComment} = require('../models/commantaire');
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
        //save the comment
        await comment.save(
            async (err, comment) => {
                if (err)
                    res.status(500).json({success: false, error: err.message});
                const currentPost = await post.findById(req.params.postId);
                //add comment to array of comments in our post
                currentPost.commantaires.push(comment);
                await commantaire.findById(comment._id)
                    .populate("userComment", ['nom', 'prenom', 'photo_profil'])
                    .populate({
                        path: 'replays',
                        populate: {path: 'Commantaire'}
                    })
                    .exec(async (err, co) => {
                        if (err) {
                            res.status(500).json({success: false, error: err.message});
                        }
                        await currentPost.save((err, post) => {
                            res.status(200).send({
                                success: true,
                                msg: `Comment is added by successfully`,
                                comment: co,
                                post: post
                            });
                        });
                    });
            });
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

exports.addReplayComment = async (req, res) => {
    try {
        const {content} = req.body;
        //validate de request body
        const {error} = validateComment(req.body);
        if (error) {
            return res.status(400).send({success: false, msg: error.details[0].message});
        }
        //find current comment
        const comment = await commantaire.findById(req.params.commentId);
        //create new comment
        const commentReplay = new commantaire({
            content: content,
            userComment: req.user._id
        });
        //save replay comment
        commentReplay.save((err, replay) => {
            if (err)
                res.status(500).json({success: false, error: err.message});
            //add replay to comment
            comment.replays.push(replay);
            //save comment
            comment.save((err) => {
                if (err)
                    res.status(500).json({success: false, error: err.message});
                //get replay comment with the user
                commantaire.findById(replay._id)
                    .populate("userComment", ['nom', 'prenom', 'photo_profil'])
                    .populate("replays")
                    .exec(async (err, co) => {
                        if (err) {
                            res.status(500).json({success: false, error: err.message});
                        }
                        res.status(200).send({
                            success: true,
                            msg: `Replay Comment is added by successfully`,
                            replay: co
                        });
                    })
            });
        });
    } catch (e) {
        res.status(500).json({success: false, error: e.message});

    }
}