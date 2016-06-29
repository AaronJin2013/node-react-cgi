import request from "middleware/request";

export default class city {
    constructor(router){
        router.get('/citys', this.get);
    }
    get(req, res, next){
        request.post({
            url: 'http://139.196.111.219/base/config/get_city_list',
            json: {
                "data": {
                    "return_type": 1
                }
            }
        }, function(error, response, body){
            res.send(body);
            //console.log(JSON.stringify(body));
        });
    }
}


