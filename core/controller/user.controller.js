const userService  = require('../service/user.service');
// const logger = require('../logger/api.logger');

class UserController {
    async createUser(user) {
        // logger.info('Controller: createTask', task);
        return await userService.createUser(user);
    }
}
module.exports = new UserController();