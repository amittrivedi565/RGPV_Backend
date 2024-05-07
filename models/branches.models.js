module.exports = (sequelize, DataTypes) => {

    const Branch = sequelize.define("Branch", {
       
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
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    })
    return Branch

}