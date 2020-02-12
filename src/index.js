require('dotenv').config();
const container = require('./api/container');

const application = container.resolve('app');

application.start()
    .catch(error => {
     console.log(error);
     process.exit();
    })
