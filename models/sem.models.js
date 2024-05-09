module.exports = (sequelize, DataTypes) => {
    const Semester = sequelize.define("Semester", {
        id: {
            type: DataTypes.CHAR(36),
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        no: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        branch_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Semester;
};
