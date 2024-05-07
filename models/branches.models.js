module.exports = (sequelize, DataTypes) => {

    const Branch = sequelize.define("Branch", {
       
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
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    })
    return Branch

}