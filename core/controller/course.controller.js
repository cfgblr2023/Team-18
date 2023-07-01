const courseService = require('../service/course.service');

class CourseController {
    async createCourse(course) {
        console.log("CREATE COURSE CONTROLLER");
        return await courseService.createCourse(course);
    }

    async getCourseById(courseId) {
        return await courseService.getCourseById(courseId);
    }

    async getCourses() {
        return await courseService.getCourses();
    }

    async getCoursesBySkill(skillId) {
        return await courseService.getCoursesBySkill(skillId);
    }

    async updateCourse(course) {
        return await courseService.updateCourse(course);
    }

    async deleteCourse(courseId) {
        return await courseService.deleteCourse(courseId);
    }
}

module.exports = new CourseController();