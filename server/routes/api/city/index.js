import request from "middleware/request";

import redis from 'middleware/redis';


export default class city {
    constructor(router){
        router.get('/citys', this.get);
    }
    get(req, res, next){
        //redis.get('city').then((data)=>{
        //    res.send(data);
        //}).catch((error)=> {
        //    res.send(error);
        //});

        //res.send(redis.get('city').then((data)=>{return data}));


        redis.get('city', function(err,data){
            if(data){
                res.send(data);
            }else{
                request.post({
                    url: 'http://139.196.111.219/base/config/get_city_list',
                    json: {
                        "data": {
                            "return_type": 1
                        }
                    }
                }, function(error, response, body){
                    redis.set('city',JSON.stringify(body), redis.print);
                    res.send(body);
                });
            }
        });


    }
}


