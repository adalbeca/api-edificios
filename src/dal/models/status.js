
module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('Status', {
        status: DataTypes.STRING,
    }, {});
    Status.associate = function (models) {
        Status.hasMany(models.Clients, {
            foreignKey: 'fk_status',
            as: 'statuses',
        });
        Status.hasMany(models.Users, {
            foreignKey: 'fk_status',
            as: 'users',
        });
        Status.hasMany(models.Countries, {
            foreignKey: 'fk_status',
            as: 'countries',
        });
        Status.hasMany(models.Cities, {
            foreignKey: 'fk_status',
            as: 'cities',
        });
    };
    return Status;
};
