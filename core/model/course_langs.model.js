module.exports = (sequelize, DataTypes, Model) => {

    class UserLangs extends Model { }

    UserLangs.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        langId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'langs',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'user_langs'
    });

    return UserLangs;
}