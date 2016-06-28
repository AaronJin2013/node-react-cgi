var common=require("../conf/common.json");
var local=require("../conf/local.json");
var beta=require("../conf/beta.json");
var gamma=require("../conf/gamma.json");
var product=require("../conf/product.json");

var config={};
switch (process.argv[2]){
    case '--beta':
        config=Object.assign({}, common,beta);
        break;
    case '--gamma':
        config=Object.assign({}, common,gamma);
        break;
    case '--product':
        config=Object.assign({}, common,product);
        break;
    case '--local':
        config=Object.assign({}, common,local);
        break;
    default:

}
module.exports = config;