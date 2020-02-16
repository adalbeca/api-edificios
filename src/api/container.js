import Startup from './startup';
import Server from './server';
import Routes from './routes';
import config from '../config/environments';


import { UserController } from './controllers';
import UserRoutes from './routes/user.routes';


const {
    asClass, createContainer, asFunction, asValue,
} = require('awilix');
const { UserRepository } = require('../dal/repositories');
const { UserService } = require('../services');
const db = require('../dal/entities');

const container = createContainer();

container
    .register({
        app: asClass(Startup).singleton(),
        server: asClass(Server).singleton(),
    })
    .register({
        UserController: asClass(UserController).singleton(),
        UserRepository: asClass(UserRepository).singleton(),
        UserService: asClass(UserService).singleton(),
    })
    .register({
        router: asFunction(Routes).singleton(),
    })
    .register({
        config: asValue(config),
        db: asValue(db),
    })
    .register({
        UserRoutes: asFunction(UserRoutes).singleton(),
    });

module.exports = container;
