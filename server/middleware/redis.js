import express from "express";
const app = express();

var redis = require('redis'),
    RDS_PORT = 6379,        //端口号
    RDS_HOST = 'localhost',    //服务器IP
    RDS_OPTS = {},            //设置项
    RDS_PWD = '',    //密码
    client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);

client.on('ready',function(res){
    console.log('ready');
});

client.on('end',function(err){
    console.log('end');
});


client.on("error", function(error) {
    console.log(error);
});
client.on('connect',function() {
});

export default client;
//
//class redisclient{
//
//
//
//    middleware(...args){
//        //args[0].json=Object.assign({},{meta: { api_call_source: '9' }},args[0].json);
//        return args;
//    }
//    get(key) {
//        //args=this.middleware(...args);
//        //client.get(...args);
//        return new Promise(function(resolve, reject){
//            client.get(key, function(err,data){
//                if(data){
//                    //console.log(data);
//                    resolve(data);
//                }else{
//                    reject(err);
//                }
//            });
//
//        });
//
//    }
//
//    set(...args) {
//        args=this.middleware(...args);
//        client.set(...args);
//    }
//
//}
//
//export default new redisclient();


//client.auth(RDS_PWD,function(){
//    console.log('通过认证');
//});
//
//client.on('connect',function(){
//    client.set('author', 'Wilson',redis.print);
//    client.get('author', function(err,res){
//        console.log(res);
//    });
//    console.log('connect');
//});
//
//client.on('connect',function(){
//    client.hmset('short', {'js':'javascript','C#':'C Sharp'}, redis.print);
//    client.hmset('short', 'SQL','Structured Query Language','HTML','HyperText Mark-up Language', redis.print);
//
//    client.hgetall("short", function(err,res){
//        if(err)
//        {
//            console.log('Error:'+ err);
//            return;
//        }
//        console.dir(res);
//    });
//});
//client.on('connect',function(){
//    var key = 'skills';
//    client.sadd(key, 'C#','java',redis.print);
//    client.sadd(key, 'nodejs');
//    client.sadd(key, "MySQL");
//
//    client.multi()
//        .sismember(key,'C#')
//        .smembers(key)
//        .exec(function (err, replies) {
//            console.log("MULTI got " + replies.length + " replies");
//            replies.forEach(function (reply, index) {
//                console.log("Reply " + index + ": " + reply.toString());
//            });
//            client.quit();
//        });
//});
