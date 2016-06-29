import {Router} from 'express';
//import users from './user';

const router = Router();

router.get("/", function (req, res) {
    res.render('index', {
        title: 'index'
    });
});

export default router;