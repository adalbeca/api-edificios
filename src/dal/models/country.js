
module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
        country: DataTypes.STRING,
        fk_status: DataTypes.INTEGER,
    }, {});
    Country.associate = function (models) {
        Country.hasMany(models.Users, {
            foreignKey: 'fk_country',
            as: 'users',
        });
        Country.hasMany(models.Clients, {
            foreignKey: 'fk_country',
            as: 'clients',
        });
    };
    return Country;
};
