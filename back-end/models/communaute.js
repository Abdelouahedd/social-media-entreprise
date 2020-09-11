const Joi = require('joi');
var { model, Schema } = require('mongoose');
var { visibilite } = require('../helper/enums/enum');


const Communaute = new Schema({
    titre: {
        type: String,
        required: true
    },
    photo_com: {
        type: String,
        required: true,
    },
    coverture: {
        type: String,
        required: true,
    },
    visibilite: {
        type: String,
        enum: Object.values(visibilite),
        default: visibilite.PUBLIC
    },
    membre: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    admin: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }]
});

exports.validateShemaAdd = (communaute) => {
    const schema = Joi.object({
        titre: Joi.string()
            .min(2)
            .max(50)
            .required(),
        visibilite: Joi.string()
            .valid('PUBLIC', 'PRIVATE', 'SECRET')
            .required(),
        admin: Joi.string()
            .required()
    });
    return schema.validate(communaute);
}


exports.communaute = model('Communaute', Communaute);