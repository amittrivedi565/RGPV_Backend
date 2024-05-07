module.exports = (sequelize, DataTypes) => {

    const Course = sequelize.define("Course", {
       
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })
    return Course

}