module.exports = (sequelize, DataTypes, Model) => {

    class Users extends Model { }

    Users.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        pincode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
    }, {
        sequelize,
        modelName: 'users'
    });

    Users.associate = (models) => {
        Users.belongsToMany(models.skills, {
            through: 'user_skills',
            as: 'skills',
            foreignKey: 'userId'
        });
        Users.belongsToMany(models.courses, {
            through: 'user_courses',
            as: 'courses',
            foreignKey: 'userId'
        });
    }

    return Users;
}


