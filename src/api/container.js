const { asClass, createContainer, asFunction, asValue } = require('awilix');
import Startup from './startup';
import Server from './server';
import {UserController} from '../api/controllers';
import Routes from '../api/routes';
import config from '../config/environments';
import UserRoutes from '../api/routes/user.routes';
const container = createContainer();

container
    .register({
    app: asClass(Startup).singleton(),
    server: asClass(Server).singleton(),
})
    .register({
        UserController: asClass(UserController).singleton(),
    })
    .register({
        router: asFunction(Routes).singleton(),
    })
    .register({
        config : asValue(config)
    })
    .register({
        UserRoutes: asFunction(UserRoutes).singleton()
    });

module.exports = container;
