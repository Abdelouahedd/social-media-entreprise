var { model, Schema } = require('mongoose');


var Commantaire = new Schema({
    sujet: {
        type: String,
        required: true,
    },
    data_creation: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
}, {
    timestamps: true
})


exports.post = model('Commantaire', Commantaire);