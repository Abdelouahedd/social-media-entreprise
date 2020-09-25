const { sondage } = require("../models/sondage");


exports.addSondage = async (req, res) => {
    try {
        const { description, date_fin, choix } = req.body;
        const sondageBody = {
            description: description,
            date_fin: date_fin,
            choix: choix,
            user: req.user._id
        }
        await sondage.save(sondageBody, (err, newSondage) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            res.status(200).send({ success: true, msg: `Sondage is created by successfully`, sondage: newSondage });
        })
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}

exports.getSondage = async (req, res, next) => {
    try {
        await sondage.find({}).sort({ createdAt: "desc" })
            .populate('user', ['nom', 'prenom', 'photo_profil'])
            .populate({
                path: 'commantaires',
                populate: [
                    {
                        path: 'replays',
                        populate: {
                            path: 'userComment',
                            select: ['nom', 'prenom', 'photo_profil'],
                            model: 'User',
                        },
                    },
                    {
                        path: 'userComment',
                        select: ['nom', 'prenom', 'photo_profil'],
                    }
                ],
            })
            .exec(
                (err, sondages) => {
                    if (err) {
                        res.status(500).json({ success: false, error: err.message });
                    }
                    res.locals.sondages = sondages
                    next();
                }
            )
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });

    }
}