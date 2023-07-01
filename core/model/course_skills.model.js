module.exports = (sequelize, DataTypes, Model) => {

    class CourseSkills extends Model { }

    CourseSkills.init({
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'courses',
                key: 'id'
            }
        },
        skillId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'skills',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'course_skills'
    });

    return CourseSkills;
}
