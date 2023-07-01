module.exports = (sequelize, DataTypes, Model) => {

    class Skills extends Model { }

    Skills.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'skills'
    });

    Skills.associate = (models) => {
        Skills.belongsToMany(models.users, {
            through: 'user_skills',
            as: 'users',
            foreignKey: 'skillId'
        });
        Skills.belongsToMany(models.courses, {
            through: 'course_skills',
            as: 'courses',
            foreignKey: 'skillId'
        });
    }

    return Skills;
}


