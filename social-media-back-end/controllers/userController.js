var { user, validationRegister } = require('../models/user');
var { generateHash } = require('../helper/helper');

exports.signIn = async (req, res) => {
    try {
        const { nom, prenom, email, mot_pass } = req.body;
        //validate de request body
        const { error } = validationRegister(req.body);
        if (error) {
            return res.status(400).send({ success: false, msg: error.details[0].message });
        }
        //check if user existe
        let chekUser = await user.findOne({ email: req.body.email });
        if (chekUser) {
            return res.status(400).send({ success: false, msg: 'That user already exisits!' });
        }
        // Insert the new user if they do not exist yet
        var Newuser = new user({
            nom: nom,
            prenom: prenom,
            email: email,
            mot_pass: generateHash(mot_pass),
        });
        await Newuser.save((err) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            res.status(200).send({ success: true, msg: `User ${Newuser.nom} is created by succesfully` });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}