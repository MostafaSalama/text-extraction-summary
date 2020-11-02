const util = require('util');
const path = require('path');
const multer = require('multer');
const { resourcesPath } = require('../config');

const maxSize = 0.2 * 1024 * 1024;

const storage = multer.diskStorage({
	destination: resourcesPath,
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});
let uploadFile = multer({
	storage: storage,
	limits: { fileSize: maxSize },
	fileFilter(req, file, cb) {

		// if no pdf or docx file don't store the file
		if (!['.pdf', '.docx'].includes(path.extname(file.originalname))) {
			// To reject this file pass `false`, like so:
			cb(null, false);
			return;
		}

		// To accept the file pass `true`, like so:
		cb(null, true);

	},
}).single('file');

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
