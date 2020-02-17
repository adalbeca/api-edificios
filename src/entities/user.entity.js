module.exports = (sequelize, DataType) => sequelize.define(
    'users',
    {
        id: {
            type: DataType.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataType.STRING,
            allowNull: true,
        },
    },
    {
        tableName: 'users',
    },
);
