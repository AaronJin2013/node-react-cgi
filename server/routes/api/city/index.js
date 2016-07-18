import cache from "middleware/cache";

export default class city {
    constructor(router){
        router.get('/citys', this.get);
    }
    async get(req, res, next){
        let params={
            url: 'http://139.196.111.219/base/config/get_city_list',
            json: {
                "data": {
                    "return_type": 1
                }
            }
        };

        res.send(await cache.get('city',params));
    }
}


