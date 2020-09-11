const { communaute, validateShemaAdd } = require('../models/communaute');
const { user } = require('../models/user');

exports.addCommunaute = async (req, res) => {
    try {
        const { error } = validateShemaAdd(req.body);
        const { titre, visibilite, admin } = req.body
        if (error) {
            return res.status(400).send({ success: false, msg: error.details[0].message });
        }
        const newCommunaute = new communaute({
            titre: titre,
            visibilite: visibilite,
            photo_com: '/public/images/' + req.file.filename
        });
        newCommunaute.admin.push(admin);

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}