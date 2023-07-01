const skillService  = require('../service/skill.service');
// const logger = require('../logger/api.logger');

class SkillController {
    async createSkill(skill) {
        // logger.info('Controller: createTask', task);
        return await skillService.createSkill(skill);
    }

    async getAllSkills() {
        // logger.info('Controller: getAllTasks');
        return await skillService.getAllSkills();
    }

    async getSkillById(id) {
        // logger.info('Controller: getTaskById', id);
        return await skillService.getSkillById(id);
    }
}
module.exports = new SkillController();