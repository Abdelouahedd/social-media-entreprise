
const { upload } = require('../helper/upload');
const post = require('../models/post');
const { user } = require('../models/user')
const mongoose = require('mongoose')


exports.createPost = async (req, res) => {
    try {
        const { sujet } = req.body;
        var newPost = new post({
            sujet: sujet,
            user: req.user._id,
            photo_post: "",
        });

        if (req.file) {
            const url = req.protocol + '://' + req.get('host');
            var path = url + '/public/images/' + req.file.filename;
            newPost.photo_post = path;
        }

        await newPost.save((err, post) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            res.status(200).send({ success: true, msg: `Post is created by succesfully`, post: post });
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
                res.send({ success: true, message: "Post uptaded by succesfully", post: post });
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
                message: "Post deleted by succesfully",
                post: post
            });

        })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getPostByUserId = async (req, res) => {
    try {
        await post.
            findOne({ user: mongoose.Types.ObjectId(req.params.user_id) }).
            populate('user').
            exec((err, posts) => {
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

exports.getPosts = async (req, res) => {
    try {
        await post.
            find({}).
            populate('user').
            exec((err, posts) => {
                if (err) {
                    res.status(500).json({ success: false, error: err.message });
                }
                res.status(200).send({
                    success: true,
                    post: posts
                });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });

    }
}



