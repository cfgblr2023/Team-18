const userService  = require('../service/user.service');
// const logger = require('../logger/api.logger');

class UserController {

    // async getTasks() {
    //     // logger.info('Controller: getTasks')
    //     return await taskService.getTasks();
    // }

    async createUser(user) {
        // logger.info('Controller: createTask', task);
        return await userService.createUser(user);
    }

    // async updateTask(task) {
    //     // logger.info('Controller: updateTask', task);
    //     return await taskService.updateTask(task);
    // }

    // async deleteTask(taskId) {
    //     // logger.info('Controller: deleteTask', taskId);
    //     return await taskService.deleteTask(taskId);
    // }
}
module.exports = new UserController();