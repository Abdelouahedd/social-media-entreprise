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
    photo: {
        type: String,
    },
    vedio: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
        unique: true
    },
    commantaires: [{
        type: Schema.Types.ObjectId,
        ref: 'Commantaire'
    }]

}, {
    timestamps: true
})


exports.post = model('Post', Post);