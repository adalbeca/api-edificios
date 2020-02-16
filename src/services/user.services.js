import toDomainEntity from '../domain/mappers';
import { toDbEntity } from '../dal/mappers';

class UserService {
    constructor({ UserRepository }) {
        this.userRepository = UserRepository;
    }

    async getUsers() {
        const user = await this.userRepository.getUsers();
        // do something

        return user.map(toDomainEntity);
    }

    async createUser(user) {
        user = toDbEntity(user);
        const createdUser = await this.userRepository.createUser(user);
        return createdUser;
    }
}

module.exports = UserService;
