
const { upload } = require('../helper/upload');

exports.createPost =  async (req, res) => {
    try {
        const { sujet, photo_post, vedio_post, user } = req.body;

        const url = req.protocol + '://' + req.get('host');
        console.log(req.file.filename);
        res.send({
            sujet: sujet,
            photo_post: url + '/public/' + req.file.filename
        })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
