class UserMapper {
    userDbMapper(user) {
        const { id, name, lastname } = user;
        return { id, name, lastname };
    }

    userDomainMapper(user) {
        const { name, lastname } = user;
        return { name, lastname };
    }
}


module.exports = UserMapper;
