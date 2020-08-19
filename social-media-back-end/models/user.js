var mongoose = require('mongoose');
const Joi = require('joi');
var Schema = mongoose.Schema;

var User = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    mot_pass: {
        type: String,
        required: true,
        minlength: 6
    },
    telephone: {
        type: String,
    },
    date_naissance: {
        type: Date
    },
    photo_profil: {
        type: String
    },
    photo_couverture: {
        type: String
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN', 'SUPER_ADMIN'],
        default: 'USER'
    }
});

function validationRegister(user) {
    const schema = {
        nom: Joi.string().required(),
        prenom: Joi.string().required(),
        email: Joi.string().required().email(),
        mot_pass: Joi.string().required()
    };
    return Joi.validate(user, schema);
}

exports.validationRegister = validationRegister;
exports.User = mongoose.model('User', User);