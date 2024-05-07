module.exports = (sequelize, DataTypes) => {

    const Admin = sequelize.define("Admin", {
       
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pswd: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Admin

}