const mongoose = require('mongoose');


const Request = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Communaute',
        required: true,
    },
})

exports.requestJoinGroup = mongoose.model('requestJoinGroup', Request);