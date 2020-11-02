const uploadFile = require('../middleware/upload');
const {readPdfFile} = require('../util')
async function uploadNewFile(request, response) {
	try {
		await uploadFile(request, response);

		if (!request.file) {
			return response.status(400).send({ message: 'Please upload the correct file format' });
		}
		const {text} = await readPdfFile(request.file.path);
		response.status(200).json({
			text
		})

	} catch (e) {
		response.status(500);
		response.json({error:e.message})
	}
}

module.exports = {
	uploadNewFile,
};
