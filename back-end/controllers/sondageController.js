const { sondage } = require("../models/sondage");
const { vote } = require("../models/vote");


exports.addSondage = async (req, res) => {
    try {
        const { description, date_fin, choix } = req.body;
        const sondageBody = new sondage({
            description: description,
            date_fin: date_fin,
            choix: choix,
            user: req.user._id
        })
        await sondageBody.save(sondageBody, (err, newSondage) => {
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


exports.addVote = async (req, res) => {
    try {
        const oldVote = await vote.findOne({ sondage: req.params._idSondage, user: req.user._id });
        if (oldVote) {
            oldVote.choix = req.body.checkedOption;
            oldVote.save();
        } else {
            const newVote = new vote({
                sondage: req.params._idSondage,
                user: req.user._id,
                choix: req.body.checkedOption
            });
            newVote.save((err, vote) => {
                if (err) {
                    res.status(500).json({ success: false, error: err.message });
                }
                res.status(200).send({ success: true, msg: `YOUR VOTE ID ADDED`, vote: vote });
            })
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }

}

exports.getDefaultOption = async (req, res) => {
    try {
        await vote.findOne({ sondage: req.params._idSondage, user: req.user._id }, (err, vote) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            res.status(200).send({ success: true, defaultChoix: vote.choix });
        });


    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }

}