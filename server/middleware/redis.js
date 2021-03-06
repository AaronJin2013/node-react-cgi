import express from "express";
const app = express();

var redis = require('redis'),
    RDS_PORT = 6379,        //端口号
    RDS_HOST = 'localhost',    //服务器IP
    RDS_OPTS = {},            //设置项
    RDS_PWD = '',    //密码
    client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);

client.on('ready',function(res){
    logger.log('ready');
});

client.on('end',function(err){
    logger.log('end');
});


client.on("error", function(error) {
    logger.log(error);
});
client.on('connect',function() {
});

//export default client;

class redisAPI{
    middleware(params) {
        params.json = Object.assign({}, {meta: {api_call_source: '9'}}, params.json);
        return params;
    }

    promise(params,type,value){
        return new Promise((resolve, reject) => {
            switch(type){
                case 'get':
                    client.get(params, function(error,body){
                        if(body){
                            resolve(body);
                        }else{
                            resolve(null);
                        }
                        if(error){
                            reject(error);
                        }
                    });
                    break;
                case 'set':
                    client.set(params,JSON.stringify(value), function(error,body){
                        if(body){
                            resolve(body);
                        }else{
                            resolve(null);
                        }
                        if(error){
                            reject(error);
                        }
                    });
                    break;
            }
        });
    }

    get(params) {
        //params = this.middleware(params);
        return this.promise(params,'get');
    }
    set(params,value) {
        //params = this.middleware(params);
        return this.promise(params,'set',value);
    }


}

export default new redisAPI();


//client.auth(RDS_PWD,function(){
//    global.logger.log('通过认证');
//});
//
//client.on('connect',function(){
//    client.set('author', 'Wilson',redis.print);
//    client.get('author', function(err,res){
//        global.logger.log(res);
//    });
//    global.logger.log('connect');
//});
//
//client.on('connect',function(){
//    client.hmset('short', {'js':'javascript','C#':'C Sharp'}, redis.print);
//    client.hmset('short', 'SQL','Structured Query Language','HTML','HyperText Mark-up Language', redis.print);
//
//    client.hgetall("short", function(err,res){
//        if(err)
//        {
//            global.logger.log('Error:'+ err);
//            return;
//        }
//        global.logger.dir(res);
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
//            global.logger.log("MULTI got " + replies.length + " replies");
//            replies.forEach(function (reply, index) {
//                global.logger.log("Reply " + index + ": " + reply.toString());
//            });
//            client.quit();
//        });
//});
