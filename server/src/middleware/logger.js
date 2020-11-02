const chalk = require('chalk');
function logger(req, res, next) {
	console.group(chalk.blue('new Request'));
	console.log(chalk.greenBright(`url: ${req.url}`));
	console.log(chalk.greenBright(`method: ${req.method}`))
    console.groupEnd();
	next();
}
module.exports = logger;
