module.exports = (sequelize, DataTypes) => {

    const Admin = sequelize.define("admin", {
       
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pswd: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastlogin: {
            
        },
        
    })
    return Test

}