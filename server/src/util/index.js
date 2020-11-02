const pdf = require('pdf-parse');
const path = require('path');
const fs = require('fs');

/**
 * read a pdf file using pdf-parser package and return the result in a promise
 * @param filePath {string} the file path to read the pdf from
 * @returns {Promise<*>}
 */
function readPdfFile(filePath) {
    const normalizedPath = path.normalize(filePath) ;
    const fileBuffer = fs.readFileSync(normalizedPath);
    return pdf(fileBuffer);
}

module.exports = {
    readPdfFile
}
