
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        city: DataTypes.STRING,
        fk_status: DataTypes.INTEGER,
    }, {});
    City.associate = function (models) {
    // associations can be defined here
        City.belongsTo(models.Status);
        City.hasMany(models.Users, {
            foreignKey: 'fk_city',
            as: 'users',
        });
        City.hasMany(models.Clients, {
            foreignKey: 'fk_city',
            as: 'clients',
        });
    };
    return City;
};
