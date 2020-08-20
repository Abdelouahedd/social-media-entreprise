
const { upload } = require('../helper/upload');
const post = require('../models/post');
const { user } = require('../models/user')
const mongoose = require('mongoose')


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

exports.updatePost = async (req, res) => {
    try {
        const { sujet } = req.body;
        await post.findById({ _id: mongoose.Types.ObjectId(req.params.id) },
            /*  {
                 $set: {
                     sujet: sujet,
                 }
             },
             { new: true }, */
            (err, post) => {
                if (err) {
                    res.status(500).json({ success: false, error: err.message });
                }
                //check if the post is owen of the user that want to deleted
                if (req.user._id != post.user) {
                    res.status(403).send({ success: false, message: "Don't have a right to delete this post" });
                }
                post.update({
                    sujet: sujet,
                }, (err, result) => {
                    if (err) {
                        res.status(500).json({ success: false, error: err.message });
                    }
                    res.send({ success: true, message: "Post uptaded by succesfully" + result, post: post });
                });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deletePost = async (req, res) => {
    try {

        //find the post that we wont to delete
        await post.findById({ _id: mongoose.Types.ObjectId(req.params.id) },
            (err, post) => {
                if (err) {
                    res.status(500).json({ success: false, error: err.message });
                }
                //check if the post is owen of the user that want to deleted
                if (req.user._id != post.user) {
                    res.status(403).send({ success: false, message: "Don't have a right to delete this post" });
                } else {
                    //delete the post
                    post.deleteOne((err, post) => {
                        if (err) {
                            res.status(500).json({ success: false, error: err.message });
                        }
                        res.status(200).send({
                            success: true,
                            message: "Post deleted by succesfully",
                            post: post
                        });
                    });
                }

            });
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



