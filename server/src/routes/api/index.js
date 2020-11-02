const router = require('express').Router();
const { uploadNewFile } = require('../../controllers/api');

router.post('/upload',uploadNewFile);

module.exports = router ;
