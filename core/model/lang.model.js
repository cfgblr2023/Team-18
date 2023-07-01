module.exports = (sequelize, DataTypes, Model) => {

    class Langs extends Model { }

    Langs.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'langs'
    });

    Langs.associate = (models) => {
        Langs.belongsToMany(models.users, {
            through: 'user_langs',
            as: 'users',
            foreignKey: 'langId'
        });
        Langs.belongsToMany(models.courses, {
            through: 'course_langs',
            as: 'courses',
            foreignKey: 'langId'
        });
    }

    return Langs;
}
