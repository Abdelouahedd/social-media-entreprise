var mongoose = require('mongoose');
const Joi = require('joi');
var Schema = mongoose.Schema;
var {role} = require('../helper/enums/enum');
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
    gender: {
        type: String,
        default: "Homme"
    },
    telephone: {
        type: String,
        default: ""
    },
    fonction: {
        type: String,
        default: ""
    },
    descriptif: {
        type: String,
        default: "",
        maxlength: 500
    },
    date_naissance: {
        type: Date,
        max: new Date(Date.now())
    },
    photo_profil: {
        type: String,
        default: ""
    },
    photo_couverture: {
        type: String,
        default: ""
    },
    ville: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: Object.values(role),
        default: role.USER
    }
}, {
    timestamps: true
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
    const schema = Joi.object({
        email: Joi.string().required().email(),
        mot_pass: Joi.string().required().min(6)
    });
    return schema.validate(user);
}

exports.validationUpdate = (user) => {
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .required(),
        nom: Joi.string()
            .min(2 )
            .max(50)
            .required(),
        telephone: Joi.string()
            .required(),
        prenom: Joi.string()
            .min(2)
            .max(50)
            .required(),
        date_naissance: Joi.date()
            .max(new Date(Date.now()))
            .required(),
        descriptif: Joi.string()
            .max(500)
            .min(20),
        ville: Joi.string(),
        address: Joi.string(),
        fonction: Joi.string()
            .required(),
        gender: Joi.string(),
    });
    return schema.validate(user);
}


exports.user = mongoose.model('User', User);