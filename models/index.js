const dbConfig = require("../config/db.config");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool : {
    max : dbConfig.pool.max,
    min : dbConfig.pool.min,
    acquire : dbConfig.pool.acquire,
    idle  : dbConfig.pool.idle
  }
});

sequelize.authenticate()
.then(()=>{
    console.log("Connected")
})
.catch(err =>{
    console.log("Error"+err)
})


const db = {}

db.Sequelize = Sequelize 

db.sequelize = sequelize 

db.admins = require('./admin.models')(sequelize,DataTypes)

db.courses = require('./courses.models')(sequelize,DataTypes)

db.branches = require('./branches.models')(sequelize,DataTypes)

db.sems = require('./sem.models')(sequelize,DataTypes)

db.subjects = require('./sub.models')(sequelize,DataTypes)

db.units = require('./units.models')(sequelize,DataTypes)



db.sequelize.sync({force : false})
.then(()=>{
    console.log("Re-Sync Done!")
})

module.exports = db