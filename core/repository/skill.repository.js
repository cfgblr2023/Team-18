const { connect } = require('../config/db.config');
// const logger = require('../logger/api.logger');


class SkillRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async createSkill(skill) {
        let data = {};
        try {
            console.log(">> Creating skill: " + JSON.stringify(skill, null, 4));
            data = await this.db.skills.create(skill);
            console.log(">> Created skill: " + JSON.stringify(data, null, 4));
        } catch(err) {
            console.log(">> Error while creating skill: ", err);
            // logger.error('Error::' + err);
        }
        return data;
    }

    async getAllSkills() {
        let data = {};
        try {
            data = await this.db.skills.findAll();
        } catch(err) {
            // logger.error('Error::' + err);
        }
        return data;
    }

    async getSkillById(id) {
        let data = {};
        try {
            data = await this.db.skills.findByPk(id);
        } catch(err) {
            // logger.error('Error::' + err);
        }
        return data;
    }

}

module.exports = new SkillRepository();