var { model, Schema } = require('mongoose');


var Sondage = new Schema({
    description: {
        type: String,
        required: true,
    },
    data_creation: {
        type: Date,
        default: Date.now,
    },
    data_debut: {
        type: Date,
    },
    data_fin: {
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
    }]
}, {
    timestamps: true
});


exports.post = model('Sondage', Sondage);