import request from "middleware/request";

import redis from 'middleware/redis';

class urlAPI{

    async get(key,params){

        let result;

        try {
            result = await redis.get(key);
            if(!result){
                result = await request.post(params);
                redis.set(key,result);
            }
        } catch (e) {
            logger.log(e);
        }
        return(result);
    }
}

export default new urlAPI();