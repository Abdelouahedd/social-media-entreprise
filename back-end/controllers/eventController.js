const mongoose = require('mongoose');
const { event } = require('../models/evenement');

exports.createEvent = async (req, res) => {
    try {

        const { titre, date_debut, date_fin, place } = req.body;

        const newEvent = new event({
            titre: titre,
            date_debut: date_debut,
            date_fin: date_fin,
            place: place,
            user: req.user._id,
            cover_img: '/public/images/' + req.file.filename
        });

        await newEvent.save((err, event) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            res.status(200).send({ success: true, msg: `Event is created by successfully`, event: event });
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}