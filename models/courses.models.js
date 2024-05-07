module.exports = (sequelize, DataTypes) => {

    const Course = sequelize.define("Course", {
       
        name: {
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
        
    })
    return Course

}