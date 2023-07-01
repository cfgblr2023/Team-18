module.exports = (sequelize, DataTypes, Model) => {

    class Courses extends Model { }

    Courses.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'courses'
    });

    Courses.associate = (models) => {
        Courses.belongsToMany(models.users, {
            through: 'user_courses',
            as: 'users',
            foreignKey: 'courseId'
        });
        Courses.belongsToMany(models.skills, {
            through: 'course_skills',
            as: 'skills',
            foreignKey: 'courseId'
        });
    }

    return Courses;
}


