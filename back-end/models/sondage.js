var { model, Schema } = require('mongoose');


var Sondage = new Schema({
    description: {
        type: String,
        required: true,
    },
    date_fin: {
        type: Date,
    },
    choix: [{
        type: String,
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Communaute'
    },
    type: {
        type: String,
        default: 'sondage'
    }
}, {
    timestamps: true
});


exports.sondage = model('Sondage', Sondage);