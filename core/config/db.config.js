const { Sequelize, Model, DataTypes } = require("sequelize");
// const logger = require('../logger/api.logger');

const connect = () => {

    const hostName = process.env.HOST;
    const userName = process.env.USER;
    const password = process.env.PASSWORD;
    const database = process.env.DB;
    const dialect = process.env.DIALECT;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.users = require("../model/user.model")(sequelize, DataTypes, Model);
    db.skills = require("../model/skill.model")(sequelize, DataTypes, Model);
    db.courses = require("../model/course.model")(sequelize, DataTypes, Model);
    db.user_skills = require("../model/user_skills.model")(sequelize, DataTypes, Model);
    db.user_courses = require("../model/user_courses.model")(sequelize, DataTypes, Model);
    db.course_skills = require("../model/course_skills.model")(sequelize, DataTypes, Model);
    db.langs = require("../model/lang.model")(sequelize, DataTypes, Model);
    db.user_langs = require("../model/user_langs.model")(sequelize, DataTypes, Model);
    db.course_langs = require("../model/course_langs.model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}