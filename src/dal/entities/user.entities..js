module.exports = (sequileze, DataTypes) => sequileze.define(
    'users',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName: 'users',
    },
);
