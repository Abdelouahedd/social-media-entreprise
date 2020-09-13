const multer = require('multer');
const {v4: uuidv4} = require('uuid');


const DIR_IMAGE = 'public/images/';
const DIR_VIDEO = 'public/videos/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|svg)$/)) {
            cb(null, DIR_IMAGE);
        } else if (file.originalname.match(/\.(mkv|mp4)$/)) {
            cb(null, DIR_VIDEO);
        }
    },
    filename: (req, file, cb) => {
        if (!file) cb(null, true);
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

exports.upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|svg|mkv|mp4)$/)) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|mkv|mp4 format allowed!'));
        }
    }
});


