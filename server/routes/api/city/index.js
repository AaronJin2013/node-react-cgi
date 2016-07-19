import url from "middleware/url";

const DEFINE={
    key:'city',
    url:'http://139.196.111.219/base/config/get_city_list'
};
export default class city {
    constructor(router){
        router.get('/citys', this.get);
    }
    async get(req, res, next){
        let params={
            url: DEFINE.url,
            json: {
                "data": {
                    "return_type": 1
                }
            }
        };

        res.send(await url.get(DEFINE.key,params));
    }
}


