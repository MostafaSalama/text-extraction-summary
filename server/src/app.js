const dotEnv = require('dotenv');
const express = require('express') ;
const logger = require('./middleware/logger');
const apiRoutes = require('./routes/api') ;
dotEnv.config() ;

// app setup
const app = express();
app.use(express.json()) ;
app.use(express.urlencoded({extended:false})) ;

// define middleware
app.use(logger)
// define routes
app.use('/api',apiRoutes) ;

module.exports = app ;
