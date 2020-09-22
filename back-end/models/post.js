const {model, Schema} = require('mongoose');


const Post = new Schema({
    sujet: {
        type: String,
        required: true,
    },
    files: [],
    video_post: [],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    commantaires: [{type: Schema.Types.ObjectId, ref: 'Commantaire'}],
    like: [{type: Schema.Types.ObjectId, ref: 'User'}],
    type:{
        type:String,
        default:'post'
    }
}, {
    timestamps: true
});

/* Post.pre('findOneAndUpdate', function (next, req, callback) {
    console.log("Befor update");
    console.log(req);
     if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('There was a duplicate key error'));
    } 
    next(callback);
}); */


var post = model('Post', Post);
module.exports = post;