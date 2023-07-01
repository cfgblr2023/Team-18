module.exports = (sequelize, DataTypes, Model) => {

    class UserSkills extends Model { }

    UserSkills.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        skillId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'user_skills'
    });

    return UserSkills;
}