const dotEnv = require('dotenv');
const express = require('express') ;

dotEnv.config() ;

const app = express();

app.use(express.json()) ;
app.use(express.urlencoded({extended:false})) ;

module.exports = app ;
