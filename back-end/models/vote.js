var { model, Schema } = require('mongoose');


var Vote = new Schema({
    sondage: {
        type: Schema.Types.ObjectId,
        ref: 'Sondage',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    choix: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
});


exports.vote = model('Vote', Vote);