var { model, Schema } = require('mongoose');


var Sondage = new Schema({
    description: {
        type: String,
        required: true,
    },
    date_debut: {
        type: Date,
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
    commantaires: [{
        type: Schema.Types.ObjectId,
        ref: 'Commantaire'
    }],
    votes: [{
        type: Schema.Types.ObjectId,
        ref: 'Vote',
    }],
    type: {
        type: String,
        default: 'sondage'
    }
}, {
    timestamps: true
});


exports.sondage = model('Sondage', Sondage);