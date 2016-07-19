var common=require("../conf/common.json");
var local=require("../conf/local.json");
var beta=require("../conf/beta.json");
var gamma=require("../conf/gamma.json");
var product=require("../conf/product.json");
var fs = require('fs');

var config={};
global.logger = require('tracer').colorConsole();

switch (process.argv[2]){
    case '--beta':
        config=Object.assign({}, common,beta);
        break;
    case '--gamma':
        config=Object.assign({}, common,gamma);
        break;
    case '--product':
        config=Object.assign({}, common,product);
        global.logger = require('tracer').console({
            transport : function(data) {
                console.log(data.output);
                var stream = fs.createWriteStream("./log/Stream.log", {
                    flags: "a",
                    encoding: "utf8"
                }).write(data.output+"\n");
            },level:'warn'
        });
        //global.logger = require('tracer').dailyfile({root:'.', maxLogFiles: 10, allLogsFileName: 'CGI',level:'warn'});
        break;
    case '--local':
        config=Object.assign({}, common,local);
        break;
    default:

}

module.exports = config;