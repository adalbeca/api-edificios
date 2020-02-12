import Router from 'express';
import boadyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';

module.exports = function ({ UserRoutes }) {
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(boadyParser.json())
        .use(compression());

    apiRoute.use('/user', UserRoutes);
    router.use('/api', apiRoute);
    return router;
};
