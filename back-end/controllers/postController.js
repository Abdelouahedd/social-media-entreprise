const post = require('../models/post');
const mongoose = require('mongoose');

exports.createPost = async (req, res) => {
    try {
        const reqFiles = [];
        const url = req.protocol + '://' + req.get('host') + "/";
        for (let i = 0; i < req.files.length; i++) {
            reqFiles.push(url + req.files[i].path);
        }
        const { sujet, group } = req.body;

        const newPost = new post({
            sujet: sujet,
            user: req.user._id,
            group: group,
            files: reqFiles
        });

        await newPost.save((err, post) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            res.status(200).send({ success: true, msg: `Post is created by successfully`, post: post });
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updatePost = async (req, res) => {
    try {
        const { sujet } = req.body;
        await post.findByIdAndUpdate(
            {
                _id: mongoose.Types.ObjectId(req.params.id)
            },
            {
                $set: {
                    sujet: sujet,
                }
            },
            {
                new: true
            },
            (err, post) => {
                if (err) {
                    res.status(500).json({ success: false, error: err.message });
                }
                res.send({ success: true, message: "Post updated by successfully", post: post });
            })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deletePost = async (req, res) => {
    try {
        await post.findByIdAndDelete({ _id: mongoose.Types.ObjectId(req.params.id) }, (err, post) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            res.status(200).send({
                success: true,
                message: "Post deleted by successfully",
                post: post
            });

        })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getPostByUserId = async (req, res) => {
    try {
        await post.findOne({ user: mongoose.Types.ObjectId(req.params.user_id) })
            .populate('user').exec((err, posts) => {
                if (err) {
                    res.status(500).json({ success: false, error: err.message });
                }
                console.log(posts.user);
                res.status(200).send({
                    success: true,
                    post: posts
                });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getPosts = async (req, res, next) => {
    try {
        await post.find({}).sort({ createdAt: "desc" })
            .populate('user', ['nom', 'prenom', 'photo_profil'])
            .populate({
                path: 'commantaires',
                populate: [
                    {
                        path: 'replays',
                        populate: {
                            path: 'userComment',
                            select: ['nom', 'prenom', 'photo_profil'],
                            model: 'User',
                        },
                    },
                    {
                        path: 'userComment',
                        select: ['nom', 'prenom', 'photo_profil'],
                    }
                ],
            })
            .populate('group', ['titre'])
            .exec(
                (err, posts) => {
                    if (err) {
                        res.status(500).json({ success: false, error: err.message });
                    }
                    res.locals.posts = posts
                    next();
                }
            )
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


exports.getPostById = async (req, res) => {
    try {
        await post.findById(req.params.id)
            .populate('user', ['nom', 'prenom', 'photo_profil'])
            .populate({
                path: 'commantaires',
                populate: [
                    {
                        path: 'replays',
                        populate: {
                            path: 'userComment',
                            select: ['nom', 'prenom', 'photo_profil'],
                            model: 'User',
                        },
                    },
                    {
                        path: 'userComment',
                        select: ['nom', 'prenom', 'photo_profil'],
                    }
                ],
            })
            .populate('group', ['titre'])
            .exec(
                (err, posts) => {
                    if (err) {
                        res.status(500).json({ success: false, error: err.message });
                    }
                    res.status(200).send({
                        success: true,
                        post: posts
                    });
                }
            )
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });

    }
}

exports.getPostByGroupId = async (req, res, next) => {
    try {
        await post.find({ group: mongoose.Types.ObjectId(req.params.id) })
            .populate('user', ['nom', 'prenom', 'photo_profil'])
            .populate({
                path: 'commantaires',
                populate: [
                    {
                        path: 'replays',
                        populate: {
                            path: 'userComment',
                            select: ['nom', 'prenom', 'photo_profil'],
                            model: 'User',
                        },
                    },
                    {
                        path: 'userComment',
                        select: ['nom', 'prenom', 'photo_profil'],
                    }
                ],
            })
            .populate('group', ['titre'])
            .exec(
                (err, posts) => {
                    if (err) {
                        res.status(500).json({ success: false, error: err.message });
                    }
                    res.locals.postsGroup = posts
                    next();
                }
            )
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });

    }
}


exports.addLike = async (req, res, next) => {
    try {
        const result = await post.findById(mongoose.Types.ObjectId(req.params.id));
        result.like.push(req.user._id);
        await result.save();
        next();
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


exports.deslike = async (req, res, next) => {
    try {
        const result = await post.findById(mongoose.Types.ObjectId(req.params.id));
        const indexOfUser = result.like.indexOf(req.user._id);
        result.like.splice(indexOfUser, 1);
        await result.save();
        next()
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}