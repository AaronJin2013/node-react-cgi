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
import request from "request";

var CONFIG=require('./middleware/env');
const app = express();
import router from './routes';
require('./middleware/webpack')(app,CONFIG);
//
//console.log('request start');
//
//request.post({
//    url: 'http://139.196.111.219/base/config/get_city_list',
//    json: {
//        "meta": {
//            "api_call_source": "9"
//        },
//        "data": {
//            "return_type": 1
//        }
//    }
//}, function(error, response, body){
//    //console.log(JSON.stringify(body));
//});


app.use('/api/', router);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), (err) => {
    if(err) console.log('Error', err);
    console.log("Express server listening on port " + app.get('port'));
});
