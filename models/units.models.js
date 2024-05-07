const { subjects } = require(".")

module.exports = (sequelize, DataTypes) => {

    const Unit = sequelize.define("Unit", {
       
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        no: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tags: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 

        subject_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        note_url: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
        
    })
    return Unit

}