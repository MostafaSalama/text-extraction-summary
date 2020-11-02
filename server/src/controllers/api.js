const uploadFile = require('../middleware/upload');
const { summarizeFile,getEntities } = require('../service');
const {normalizeEntities} = require('../util')
async function uploadNewFile(request, response) {
	try {
		await uploadFile(request, response);

		if (!request.file) {
			return response
				.status(400)
				.send({ message: 'Please upload the correct file format' });
		}
		const data = await summarizeFile(request.file.path);
		if (!data.summary) {
			response.json({
				error: `error trying to summarize file ${file.originalname}`,
				message: data.msg,
			});
		}
		const entities = await getEntities(request.file.path) ;
		const normalizedEntities = normalizeEntities(entities);
		response.json({ summary: data.summary,entities:normalizedEntities });
	} catch (e) {
		response.status(500);
		response.json({ error: e.message });
	}
}

module.exports = {
	uploadNewFile,
};
