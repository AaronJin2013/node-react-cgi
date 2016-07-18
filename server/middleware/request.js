import request from "request";

class requestAPI {
    middleware(params) {
        params.json = Object.assign({}, {meta: {api_call_source: '9'}}, params.json);
        return params;
    }

    promise(params,fun){
        return new Promise((resolve, reject) => {
            fun(params, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                resolve(body);
            });
        });
    }
    
    post(params) {
        params = this.middleware(params);
        return this.promise(params,request.post);
    }

    get(params) {
        args=this.middleware(params);
        return this.promise(params,request.get);
    }
    put(params) {
        args=this.middleware(params);
        return this.promise(params,request.put);
    }
    patch(params) {
        args=this.middleware(params);
        return this.promise(params,request.patch);
    }
    del(params) {
        args=this.middleware(params);
        return this.promise(params,request.del);
    }
    delete(params) {
        args=this.middleware(params);
        return this.promise(params,request.delete);
    }
    //head(params) {
    //    request.get(params);
    //}
    //jar(params) {
    //    request.get(params);
    //}
    //cookie(params) {
    //    request.get(params);
    //}
    //defaults(params) {
    //    request.get(params);
    //}
    //forever(params) {
    //    request.get(params);
    //}
}

//export default requestAPI;
export default new requestAPI();