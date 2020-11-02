const http = require('http');
const chalk = require('chalk');
const app = require('../app');
const server = http.createServer(app);

const port = process.env.PORT || 3001;
app.set('port', port);

server.listen(port,()=>{
    console.log(chalk.green(`app is running at port ${port}`)) ;
});
