var { model, Schema } = require('mongoose');


var Evenment = new Schema({
    titre: {
        type: String,
        required: true,
    },
    date_debut: {
        type: Date,
        required: true,
    },
    date_fin: {
        type: Date,
    },
    place: {
        type: String,
        required: true,
    },
    cover_img: {
        type: String,
        required: true,
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


exports.event = model('Evenment', Evenment);