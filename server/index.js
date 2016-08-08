import express from "express";
import path from "path";
import http from "http";
import favicon from "serve-favicon";
import methodOverride from "method-override";
import session from "express-session";
import bodyParser from "body-parser";
import multer from "multer";
import errorhandler from "errorhandler";

import proxy from'http-proxy-middleware';

var CONFIG=require('middleware/env');
const app = express();
import apiRouter from './routes/api';
import router from './routes';

require('middleware/webpack')(app,CONFIG);
//
//app.use('/', router);
//app.use('/api/', apiRouter);


app.use('/new/', router);
app.use('/api/', apiRouter);

app.use('/', proxy({target: 'http://wap.yunjiazheng.com/', changeOrigin: true}));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), (err) => {
    if(err) logger.log('Error', err);
    logger.log("Express server listening on port " + app.get('port'));
});
