class UserRepository {
    construtor({ db }) {
        this.db = db;
    }

    getUsers() {
        console.log(this.db);
        return this.db.users.findAll();
    }

    createUser(user) {
        return this.db.users.create(user);
    }
}
module.exports = UserRepository;
