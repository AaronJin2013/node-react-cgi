import webpack from "webpack";
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

import router from './routes';
var CONFIG=require('./middleware/env');
console.log(CONFIG);

console.log('request start');

request.post({
    url: 'http://139.196.111.219/base/config/get_city_list',
    json: {
        "meta": {
            "api_call_source": "9"
        },
        "data": {
            "return_type": 1
        }
    }
}, function(error, response, body){
    //console.log(JSON.stringify(body));
});


const app = express();
app.use('/api/', router);
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), (err) => {
    if(err) console.log('Error', err);
    console.log("Express server listening on port " + app.get('port'));
});
