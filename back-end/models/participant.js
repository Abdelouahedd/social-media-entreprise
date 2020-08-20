var { model, Schema } = require('mongoose');


var Participant = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Evenment'
    }
}, {
    timestamps: true
});


exports.post = model('Participant', Participant);