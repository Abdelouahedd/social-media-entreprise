const {model, Schema} = require('mongoose');
const Joi = require('joi');


const Commantaire = new Schema({
    content: {
        type: String,
        required: true,
    },
    userComment: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    replays: [{type: Schema.Types.ObjectId, ref: 'Commantaire'}]
}, {
    timestamps: true
});


exports.validateComment = (comment) => {
    const schema = Joi.object({
        content: Joi.string().required()
    });
    return schema.validate(comment);
}


exports.commantaire = model('Commantaire', Commantaire);