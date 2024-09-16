const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync('./uploads')) {
            fs.mkdirSync('./uploads', { recursive: true });
        }
        cb(null, './uploads'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

module.exports.upload = multer({
    storage: storage
});
