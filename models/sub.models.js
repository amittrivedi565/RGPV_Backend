module.exports = (sequelize, DataTypes) => {

    const Subject = sequelize.define("Subject", {
       
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

        semester_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        
    })
    return Subject

}