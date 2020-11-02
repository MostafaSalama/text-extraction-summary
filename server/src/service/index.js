const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

function summarizeFile(filePath) {
	const fileNormalizedPath = path.normalize(filePath);
	const apiURL = 'https://api.meaningcloud.com/summarization-1.0';
	const file = fs.createReadStream(fileNormalizedPath);
	let f = new FormData();
	f.append('key', process.env.MEANING_CLOUD_API_KEY);
	f.append('sentences', '5');
	f.append('doc', file);
	const request_config = {
		method: 'post',
		url: apiURL,
		headers: f.getHeaders(),
		data: f,
	};
	return axios(request_config).then((res) => res.data);
}
function getEntities(filePath,options){
	const fileNormalizedPath = path.normalize(filePath);
	const apiURL = 'https://api.meaningcloud.com/topics-2.0';
	const file = fs.createReadStream(fileNormalizedPath);
	const f = new FormData();
	f.append('doc',file);
	f.append('key',process.env.MEANING_CLOUD_API_KEY);
	const lang= options?.lang || 'en';
	f.append('lang',lang);
	f.append('tt','etm');
	const request_config = {
		method: 'post',
		url: apiURL,
		headers: f.getHeaders(),
		data: f,
	};
	return axios(request_config).then((res) => res.data);

}
module.exports = {
    summarizeFile,
	getEntities
}
