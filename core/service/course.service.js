const courseRepository  = require('../repository/course.repository');

class CourseService {

    constructor() {}

    async createCourse(course) {
        console.log("CREATE COURSE SERVICE");
        return await courseRepository.createCourse(course);
    }

    async getCourseById(courseId) {
        return await courseRepository.getCourseById(courseId);
    }

    async getCourses() {
        return await courseRepository.getCourses();
    }

    async getCoursesBySkill(skillId) {
        return await courseRepository.getCoursesBySkill(skillId);
    }

    async updateCourse(course) {
        return await courseRepository.updateCourse(course);
    }

    async deleteCourse(courseId) {
        return await courseRepository.deleteCourse(courseId);
    }

}

module.exports = new CourseService();