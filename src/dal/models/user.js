
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        dni: DataTypes.INTEGER,
        cuil: DataTypes.INTEGER,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        fk_role: DataTypes.INTEGER,
        address: DataTypes.STRING,
        fk_city: DataTypes.INTEGER,
        fk_country: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        mobile: DataTypes.STRING,
        photo: DataTypes.STRING,
        fk_status: DataTypes.STRING,
    }, {});
    User.associate = function (models) {
        User.belongsTo(models.Country);
        User.belongsTo(models.City);
        User.belongsTo(models.Status);
        User.belongsTo(models.Role);
    };
    return User;
};
