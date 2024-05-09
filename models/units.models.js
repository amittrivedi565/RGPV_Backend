module.exports = (sequelize, DataTypes) => {
    const Unit = sequelize.define("Unit", {
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
        subject_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        note_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Unit;
};
