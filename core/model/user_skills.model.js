module.exports = (sequelize, DataTypes, Model) => {

    class UserSkills extends Model { }

    UserSkills.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
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
        modelName: 'user_skills'
    });

    return UserSkills;
}