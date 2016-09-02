import {Router} from 'express';


const router = Router();

router.get("/", function (req, res) {
    res.render('wap', {
        title: 'index'
    });
});

export default router;