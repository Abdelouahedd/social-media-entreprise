var { model, Schema } = require('mongoose');


var Evenment = new Schema({
    titre: {
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
    place: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    commantaires: [{
        type: Schema.Types.ObjectId,
        ref: 'Commantaire'
    }]
}, {
    timestamps: true
});


exports.post = model('Evenment', Evenment);