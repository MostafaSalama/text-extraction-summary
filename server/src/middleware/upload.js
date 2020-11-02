const util = require('util');
const path = require('path');
const multer = require('multer');
const { resourcesPath } = require('../config');
const maxSize = 2 * 1024 * 1024;
const storage = multer.diskStorage({
	destination: resourcesPath,
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});
let uploadFile = multer({
	storage: storage,
	limits: { fileSize: maxSize },
}).single('file');

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
