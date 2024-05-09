const dbConfig = require("../config/db.config");
const { Sequelize, DataTypes } = require("sequelize");
const uuidv4 = require("uuid").v4;
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: console.log,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log("Error" + err);
    });

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;

db.admins = require("./admin.models")(sequelize, DataTypes);

db.courses = require("./courses.models")(sequelize, DataTypes);

db.branches = require("./branches.models")(sequelize, DataTypes);

db.sems = require("./sem.models")(sequelize, DataTypes);

db.subjects = require("./sub.models")(sequelize, DataTypes);

db.units = require("./units.models")(sequelize, DataTypes);

db.sequelize.sync({ force: true }).then(async () => {
    console.log("Re-Sync Done!");
    let admin = {
        id: uuidv4(),
        name: "Amit Trivedi",
        email: "deevanshukushwah80@gmail.com",
        password: bcrypt.hashSync("Sample@125502", salt),
    };

    await db.admins.create(admin);
});

module.exports = db;
