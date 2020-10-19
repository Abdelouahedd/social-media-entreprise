const mongoose = require('mongoose');
const { event } = require('../models/evenement');

exports.createEvent = async (req, res) => {
    try {

        const { titre, date_debut, date_fin, place, group } = req.body;

        const newEvent = new event({
            titre: titre,
            date_debut: date_debut,
            date_fin: date_fin,
            place: place,
            group: group,
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

exports.deleteEvent = async (req, res) => {
    try {
        await event.findByIdAndDelete({ _id: mongoose.Types.ObjectId(req.params.id) }, (err, event) => {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            }
            res.status(200).send({
                success: true,
                message: "Event deleted by successfully",
                event: event
            });
        })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getEventsByUserId = async (req, res) => {
    try {
        await event.findOne({ user: mongoose.Types.ObjectId(req.params.user_id) })
            .populate('user')
            .populate('group', ['titre'])
            .exec((err, events) => {
                if (err) {
                    res.status(500).json({ success: false, error: err.message });
                }
                res.status(200).send({
                    success: true,
                    events: events
                });
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getEvents = async (req, res) => {
    try {
        await event.find({}).sort({ createdAt: "desc" })
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
            .populate('group', ['titre'])
            .exec(
                (err, events) => {
                    if (err) {
                        res.status(500).json({ success: false, error: err.message });
                    }
                    res.status(200).send({
                        success: true,
                        events: events,
                        posts: res.locals.posts,
                        sondages: res.locals.sondages
                    });
                }
            )
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });

    }
}

exports.getEventsByGroupId = async (req, res) => {
    try {
        await event.find({ group: req.params.id }).sort({ createdAt: "desc" })
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
            .populate('group', ['titre'])
            .exec(
                (err, events) => {
                    if (err) {
                        res.status(500).json({ success: false, error: err.message });
                    }
                    res.status(200).send({
                        success: true,
                        events: events,
                        posts: res.locals.postsGroup,
                        sondages: res.locals.sondagesGroup
                    });
                }
            )
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });

    }
}

exports.getEventById = async (req, res) => {
    try {
        await event.findById(req.params.id)
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
            .populate('group', ['titre'])
            .exec(
                (err, event) => {
                    if (err) {
                        res.status(500).json({ success: false, error: err.message });
                    }
                    res.status(200).send({
                        success: true,
                        event: event
                    });
                }
            )
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


