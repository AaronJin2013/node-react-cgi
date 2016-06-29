import express from "express";
import path from "path";
import http from "http";
import favicon from "serve-favicon";
import logger from "morgan";
import methodOverride from "method-override";
import session from "express-session";
import bodyParser from "body-parser";
import multer from "multer";
import errorhandler from "errorhandler";

var CONFIG=require('middleware/env');
const app = express();
import apiRouter from './routes/api';
import router from './routes';

require('middleware/webpack')(app,CONFIG);

app.use('/', router);
app.use('/api/', apiRouter);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), (err) => {
    if(err) console.log('Error', err);
    console.log("Express server listening on port " + app.get('port'));
});
