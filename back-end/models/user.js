var mongoose = require('mongoose');
const Joi = require('joi');
var Schema = mongoose.Schema;
var { role } = require('../helper/enums/enum');
var User = new Schema({
    nom: {
        type: String,
        required: true,
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
        enum: Object.values(role),
        default: role.USER
    }
});

exports.validationRegister = (user) => {
    const schema = Joi.object({
        nom: Joi.string().required(),
        prenom: Joi.string().required(),
        email: Joi.string().required().email(),
        mot_pass: Joi.string().required().min(6)
    });
    return schema.validate(user);
}

exports.validationConnecter = (user) => {
    const schema =  Joi.object({
        email: Joi.string().required().email(),
        mot_pass: Joi.string().required().min(6)
    });
    return schema.validate(user);
}


exports.user = mongoose.model('User', User);