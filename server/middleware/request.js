import request from "request";

class requestAPI{
    middleware(...args){
        args[0].json=Object.assign({},{meta: { api_call_source: '9' }},args[0].json);
        return args;
    }
    post(...args) {
        args=this.middleware(...args);
        request.post(...args);
    }
    get(...args) {
        args=this.middleware(...args);
        request.get(...args);
    }
    put(...args) {
        args=this.middleware(...args);
        request.get(...args);
    }
    patch(...args) {
        args=this.middleware(...args);
        request.get(...args);
    }
    del(...args) {
        args=this.middleware(...args);
        request.get(...args);
    }
    delete(...args) {
        args=this.middleware(...args);
        request.get(...args);
    }
    head(...args) {
        request.get(...args);
    }
    jar(...args) {
        request.get(...args);
    }
    cookie(...args) {
        request.get(...args);
    }
    defaults(...args) {
        request.get(...args);
    }
    forever(...args) {
        request.get(...args);
    }
}

//export default requestAPI;
export default new requestAPI();