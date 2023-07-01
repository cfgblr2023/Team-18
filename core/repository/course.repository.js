const { connect } = require('../config/db.config');

class CourseRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async createCourse(course) {
        console.log("CREATE COURSE", course);
        let data = {};
        try {
            data = await this.db.courses.create(course);
            // add it to course_skills table
            course.skills.forEach(async skill => {
                console.log("CREATE COURSE SKILL", skill);
                try {
                    await this.db.course_skills.create({
                        courseId: data.id,
                        skillId: skill
                    });
                } catch (err) {
                    console.log('Error1::' + err);
                    // logger.error('Error::' + err);
                }

            });
        } catch (err) {
            console.log('Error::' + err);
            // logger.error('Error::' + err);
        }
        return data;
    }

    async getCourseById(courseId) {
        let data = {};
        try {
            data = await this.db.courses.findByPk(courseId);
        } catch (err) {
            // logger.error('Error::' + err);
        }
        return data;
    }

    async getCourses() {
        let data = {};
        try {
            data = await this.db.courses.findAll();
        } catch (err) {
            // logger.error('Error::' + err);
        }
        return data;
    }

    async getCoursesBySkill(skillId) {
        let data = {};
        let skills = {};
        try {
            skills = await this.db.course_skills.findAll({
                where: {
                    skillId: skillId
                }
            });
            console.log("SKILLS", skills);
            data = await this.db.courses.findAll({
                where: {
                    id: skills.map(skill => skill.courseId)
                }
            });

        } catch (err) {
            // logger.error('Error::' + err);
            console.log('Error::' + err);
        }
        return data;
    }

    async updateCourse(course) {
        let data = {};
        try {
            course.updateddate = new Date().toISOString();
            data = await this.db.courses.update({ ...course }, {
                where: {
                    id: course.id
                }
            });
        } catch (err) {
            // logger.error('Error::' + err);
        }
        return data;
    }

    async deleteCourse(courseId) {
        let data = {};
        try {
            data = await this.db.courses.destroy({
                where: {
                    id: courseId
                }
            });
        } catch (err) {
            // logger.error('Error::' + err);
        }
        return data;
    }

}

module.exports = new CourseRepository();