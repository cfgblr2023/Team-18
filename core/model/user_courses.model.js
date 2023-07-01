module.exports = (sequelize, DataTypes, Model) => {

    class UserCourses extends Model { }

    UserCourses.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'courses',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'user_courses'
    });

    return UserCourses;
}