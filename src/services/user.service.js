import db from '../entities';

const { userMapper } = require('./mappers');

const { users } = db;
class UserService {
    async getUser() {
        const getUser = await users.findAll();
        const user = getUser.map(userMapper.userDomainMapper);
        return ({
            status: 200,
            payload: user,
        });
    }

    async createUser(user) {
        const userMapped = userMapper.userDbMapper(user);
        const createdUser = await users.create(userMapped);
        return createdUser;
    }
}

module.exports = UserService;
