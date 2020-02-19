
module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        dni: DataTypes.INTEGER,
        cuil: DataTypes.INTEGER,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        mobile: DataTypes.STRING,
        address: DataTypes.STRING,
        fk_country: DataTypes.INTEGER,
        fk_city: DataTypes.INTEGER,
        fk_status: DataTypes.INTEGER,
    }, {});
    Client.associate = function (models) {
        Client.belongsTo(models.Country);
        Client.belongsTo(models.City);
        Client.belongsTo(models.Status);
    };
    return Client;
};
