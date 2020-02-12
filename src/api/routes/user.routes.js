import Router from 'express';


module.exports = function ({ UserController }) {
    const router = Router();
    router.get('/', UserController.sayHello);

    return router;
};
