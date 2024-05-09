module.exports = (sequelize, DataTypes) => {
    const Branch = sequelize.define("Branch", {
        id: {
            type: DataTypes.CHAR(36),
            primaryKey: true,
            allowNull: false,
        },
        name: {
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
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Branch;
};
