import request from "middleware/request";

import redis from 'middleware/redis';


export default class city {
    constructor(router){
        router.get('/citys', this.get);
    }
    get(req, res, next){
        let result;
        let params={
            url: 'http://139.196.111.219/base/config/get_city_list',
            json: {
                "data": {
                    "return_type": 1
                }
            }
        };

        (async function() {
            try {
                //result = await request.post(params);
                result = await redis.get('city');
                if(!result){
                    result = await request.post(params);
                    redis.set('city',result);
                }
                console.log(result);
            } catch (e) {
                console.log(e);
            }

            res.send(await redis.get('city'));
        })();

    }
}


