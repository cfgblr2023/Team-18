const SkillRepository  = require('../repository/skill.repository');

class SkillService {

    constructor() {}

    async createSkill(skill) {
        return await SkillRepository.createSkill(skill);
    }

    async getAllSkills() {
        return await SkillRepository.getAllSkills();
    }

    async getSkillById(id) {
        return await SkillRepository.getSkillById(id);
    }

}

module.exports = new SkillService();