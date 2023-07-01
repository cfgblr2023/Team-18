module.exports = (sequelize, DataTypes, Model) => {

    class CourseSkills extends Model { }

    CourseSkills.init({
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        skillId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'course_skills'
    });

    return CourseSkills;
}
