module.exports = (sequelize, DataTypes) => {

    const Admin = sequelize.define("admins", {
       
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
            required: true 
        },
        pswd: {
            type: DataTypes.STRING,
            allowNull: false,
            required : true 
        }
    })
    return Admin

}