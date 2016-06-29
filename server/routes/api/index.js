import {Router} from 'express';
const router = Router();


router.get('/test', function(req, res, next){
    console.log('test');
    res.send('test');
});


import city from './city';
new city(router);

//
//router.get('/users', users.indexAction);
//router.get('/users/:id', users.itemAction);
//router.post('/users', users.addAction);
//router.put('/users/:id', users.updateAction);
//router.delete('/users/:id', users.deleteAction);
export default router;