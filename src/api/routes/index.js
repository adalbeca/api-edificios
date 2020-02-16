import Router from 'express';
import boadyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';

module.exports = ({ UserRoutes }) => {
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(morgan('tiny'))
        .use(boadyParser.json())
        .use(compression());

    apiRoute.use('/user', UserRoutes);
    router.use('/api', apiRoute);
    return router;
};
