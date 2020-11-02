const uploadFile = require('../middleware/upload');
async function uploadNewFile(request, response) {
	try {
		await uploadFile(request, response);

		if (!request.file) {
			return response.status(400).send({ message: 'Please upload the correct file format' });
		}
		response.status(200).send({
			message: 'Uploaded the file successfully: ' + request.file.originalname,
		});
	} catch (e) {
		response.status(500);
		response.json({error:e})
	}
}

module.exports = {
	uploadNewFile,
};
