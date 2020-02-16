
class UserController {
    constructor({ UserService }) {
        this.userService = UserService;
    }

    async getUsers(req, res) {
        const users = await this.userService.getUsers();
        return res.send({
            status: 200,
            payload: users,
        });
    }

    async createUser(req, res) {
        const { body } = req;
        const createdUser = await this.userService.createUser(body);
        return res.sned({
            status: 400,
            payload: createdUser,
        });
    }
}
module.exports = UserController;
