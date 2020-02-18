
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        city: DataTypes.STRING,
        fk_status: DataTypes.INTEGER,
    }, {});
    City.associate = function (models) {
    // associations can be defined here
    };
    return City;
};
