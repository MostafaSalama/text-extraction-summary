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
function normalizeEntities(entities) {
    const {entity_list,time_expression_list,money_expression_list} = entities ;
    const res = [] ;
    for(let entity of entity_list) {
        const entityType = entity.sementity.type
        if(entityType.includes('>')){
            const value = entity.form ;
            const subStringStart = entityType.indexOf('>')
            const type = entityType.substring(subStringStart+1).split('>');
            res.push({value,type}) ;
        }
    }
    for(let time of time_expression_list) {
        const value = time.form ;
        const type = 'time';
        const precision = time.precision ;
        res.push({value,type,precision});
    }
    for(let money of money_expression_list) {
        const value = money.form ;
        const type = 'money';
        const currency = money.currency ;
        res.push({value,type,currency}) ;
    }
    return res;
}
module.exports = {
    readPdfFile,normalizeEntities
}
