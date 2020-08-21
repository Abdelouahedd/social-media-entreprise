var { model, Schema } = require('mongoose');


var Post = new Schema({
    sujet: {
        type: String,
        required: true,
    },
    data_creation: {
        type: Date,
        default: Date.now,
    },
    photo_post: {
        type: String,
    },
    vedio_post: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    commantaires: [{
        type: Schema.Types.ObjectId,
        ref: 'Commantaire'
    }]

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