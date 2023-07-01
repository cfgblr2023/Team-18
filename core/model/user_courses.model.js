module.exports = (sequelize, DataTypes, Model) => {

    class UserCourses extends Model { }

    UserCourses.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'user_courses'
    });

    return UserCourses;
}